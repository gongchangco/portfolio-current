import { Contact } from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact | Grace Ongchangco",
    description:
        "Grace Ongchangco is a software, automation, and fullstack developer.",
};

export default function Message() {
    return (
        <Container>
            <span className="text-2xl">✉️</span>
            <Heading className="mb-2">
                Contact Me
            </Heading>
            <p className="mb-10 max-w-xl">
                Reach out to me over email or fill up this contact form. I will get back to you ASAP. {" "}
            </p>
            <Contact />
        </Container>
    )
}