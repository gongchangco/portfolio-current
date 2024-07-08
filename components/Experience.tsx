"use client"
import React from "react"
import { Heading } from "./Heading"
import { timeline } from "@/data"
import { IconCircleFilled } from "@tabler/icons-react"

export const Experience = () => {
    return(
        <div>
            {timeline.map((item, index) => (
                <div
                    className="flex md:flex-row flex-col space-y-10 md:space-y-0 space-x-10 my-20 relative"
                    key={`timeline-${index}`}
                >
                    <p className="text-sm lg:text-base font-normal w-40">{item.date}</p>
                    <div>
                        <Heading
                            as="h5"
                            className="text-lg md:text-lg lg:text-lg text-emerald-500"
                        >
                            {item.company}
                        </Heading>
                        <p className="text-base md:text-base lg:text-base font-semibold">
                            {item.title}
                        </p>
                        <p className="text-sm md:text-sm lg:text-sm mb-4">
                            {item.description}
                        </p>

                        {item.responsibilities.map((responsibility) => (
                            <Step key={responsibility}>{responsibility}</Step>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

const Step = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="flex space-x-1 items-start my-2">
        <IconCircleFilled className="h-3 w-4 mt-1 text-neutral-300" />
        <p className="text-sm md:text-sm lg:text-sm">
          {children}
        </p>
      </div>
    );
  };