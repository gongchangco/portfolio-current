"use client"
import React, { useEffect, useState } from "react";

const defaultFormState = {
    name: {
        value: "",
        error: "",
    },
    email: {
        value: "",
        error: "",
    },
    message: {
        value: "",
        error: "",
    },
}

export const Contact = () => {
    const [submitSuccess, setSubmitSuccess] = useState(false);

    useEffect(() => {
        if (window.location.search.includes('success=true')) {
            setSubmitSuccess(true);
        }
    }, []);

    return (
        <div>
            {submitSuccess && (
                <p className="text-green-400">
                    Successfully submitted form.
                </p>
            )}

            <form
                name="contact"
                method="POST"
                action="/?success=true"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                <input type="hidden" name="form-name" value="contact" />
                <label className="hidden">
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>

                <div className="flex flex-col md:flex-row justify-between gap-5">

                    <input 
                        type="text"
                        placeholder="Name"
                        className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
                        name="name"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 py-2 rounded-md text-sm text-neutral-700 w-full"
                        name="email"
                    />
                </div>

                <div>
                    <textarea
                        placeholder="Message"
                        rows={10}
                        className="bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-200 px-2 mt-4 py-2 rounded-md text-sm text-neutral-700 w-full"
                        name="message"
                    />
                </div>

                <button
                    className="w-full px-2 py-2 mt-4 bg-neutral-300 rounded-md font-bold text-neutral-600"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>

    )
}