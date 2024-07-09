import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"
import { Products } from "@/components/Products";
import { Metadata } from "next"
import Image from "next/image";

export const metadata: Metadata = {
    title: "Projects | Grace Ongchangco",
    description: "Grace Ongchangco is a developer, writer and speaker. She is a digital nomad and travels around the world while working remotely.",
};

export default function Projects() {
    return (
        <Container>
            <span className="text-2xl">⚡</span>
            <Heading className="mb-2">
                {" "}
                What I&apos;ve worked on:
            </Heading>
            
            <p className="text-base font-mono mb-10">Below are the list of projects I&apos;ve worked on both work-related and non-work related.</p>

            <Products />
        </Container>
    )
}