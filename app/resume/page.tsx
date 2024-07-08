import { Container } from "@/components/Container";
import { Experience } from "@/components/Experience";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";

export default function Resume() {
    return (
        <Container>
            <span className="text-2xl">💼</span>
            <Heading className="font-black">Work Experience</Heading>
            <p className="text-sm lg:text-base font-normal mt-4">
                I&apos;m a software developer that loves{" "}
                <Highlight>automation</Highlight> and web applications that can make tasks efficient.
            </p>
            <Experience />
        </Container>
    )
}