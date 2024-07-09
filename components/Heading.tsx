import React from 'react'
import { twMerge } from "tailwind-merge"

export const Heading = ({
    className,
    children,
    as: Tag = "h1",
}: {
    className?: string;
    children: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
}) => {
    return (
        <Tag
        className={twMerge(
            "text-base md:text-xl lg:text-3xl bg-gradient-to-r from-slate-500 to-stone-500 inline-block text-transparent bg-clip-text pl-2",
            className
        )}
        >
            {children}
        </Tag>
    );
};