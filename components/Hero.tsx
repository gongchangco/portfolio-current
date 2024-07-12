import React from 'react'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import { Highlight } from './Highlight'
import { Heading } from './Heading'
import { Products } from './Products'

const Hero = () => {
    return (
        <div className="flex relative z-10">
            <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
                <TextGenerateEffect
                    words="👋 Welcome to Domigraphics"
                    className="md:text-5xl lg:text-6xl"
                />

                <p className="text-sm lg:text-base font-normal text-secondary max-w-xl mt-4">
                    As a software developer I love automation and building web applications that can impact user experience.
                </p>

                <Heading
                    as="h2"
                    className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
                >
                    What I&apos;ve worked on:
                </Heading>
                <Products />
            </div>
        </div>
    )
}

export default Hero