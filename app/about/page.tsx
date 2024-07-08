import { Container } from "@/components/Container"
import { Heading } from "@/components/Heading"
import { Highlight } from "@/components/Highlight"
import { Metadata } from "next"
import Image from "next/image"
import { motion } from "framer-motion"
import About from "@/components/About"

export const metadata: Metadata = {
    title: "About | Grace Ongchangco",
    description:
      "Grace Ongchangco is a software developer with automation experience.",
  };

export default function AboutPage() {
    return (
        <Container>
            <span className="text-2xl">💬</span>
            <Heading className="font-black">About Me</Heading>
            <About />
        </Container>
    )
}
