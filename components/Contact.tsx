"use client"
import React, { useState, useEffect } from "react";


const defaultFormState = {
    name: { value: "", error: "" },
    email: { value: "", error: "" },
    message: { value: "", error: "" },
}

export const Contact = () => {
    const [formData, setFormData] = useState(defaultFormState);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState("");
    const [accessKey, setAccessKey] = useState<string | undefined>(undefined);

    useEffect(() => {
        setAccessKey(process.env.WEB3_PUBLIC_ACCESS_KEY);
    }, []);

    const validateForm = () => {
        let isValid = true;
        const newFormData = { ...formData };

        if (!formData.name.value.trim()) {
            newFormData.name.error = "Name is required";
            isValid = false;
        }

        if (!formData.email.value.trim()) {
            newFormData.email.error = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email.value)) {
            newFormData.email.error = "Email is invalid";
            isValid = false;
        }

        if (!formData.message.value.trim()) {
            newFormData.message.error = "Message is required";
            isValid = false;
        }

        setFormData(newFormData);
        return isValid;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) return;

        if (!accessKey) {
            setSubmitError("Access key is missing. Please check your environment configuration.");
            return;
        }

        setSubmitSuccess(true);
        setSubmitError("");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.WEB3_PUBLIC_ACCESS_KEY,
                    name: formData.name.value,
                    email: formData.email.value,
                    message: formData.message.value,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormData(defaultFormState);
                alert("Form submitted successfully!");
            } else {
                throw new Error("Form submission failed");
            }
        } catch (error) {
            setSubmitError("An error occurred while submitting the form. Please try again.");
        } finally {
            setSubmitSuccess(false);
        }
    }

    return (
        <div>
            {submitSuccess && (
                <p className="text-green-400">
                    Successfully submitted form.
                </p>
            )}

            <form
                name="contact"
                onSubmit={handleSubmit}
            >
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <input 
                        type="text"
                        placeholder="Name"
                        className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
                        name="name"
                        value={formData.name.value}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                name: {
                                    value: e.target.value,
                                    error: "",
                                },
                            });
                        }}
                    />
                    {formData.name.error && <p className="text-red-500 text-xs mt-1">{formData.name.error}</p>}

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
                        name="email"
                        value={formData.email.value}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                email: {
                                    value: e.target.value,
                                    error: "",
                                },
                            });
                        }}
                    />
                    {formData.email.error && <p className="text-red-500 text-xs mt-1">{formData.email.error}</p>}
                </div>

                <div>
                    <textarea
                        placeholder="Message"
                        rows={10}
                        className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
                        name="message"
                        value={formData.message.value}
                        onChange={(e) => {
                            setFormData({
                                ...formData,
                                message: {
                                    value: e.target.value,
                                    error: "",
                                },
                            });
                        }}
                    />
                    {formData.message.error && <p className="text-red-500 text-xs mt-1">{formData.message.error}</p>}
                </div>
                {submitError && <p className="text-red-500 text-sm mt-2">{submitError}</p>}
                <button
                    className="w-full px-2 py-2 mt-4 bg-neutral-300 rounded-md font-bold text-neutral-600"
                    type="submit"
                    disabled={submitSuccess}
                >
                    {submitSuccess ? "Submitting..." : "Submit"}
                </button>
            </form>
        </div>
    )
}