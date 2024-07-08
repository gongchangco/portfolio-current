import React from 'react'
import { twMerge } from "tailwind-merge"
import localFont from 'next/font/local'

const CalSans = localFont({
    src: [{ path: "../fonts/CalSans-SemiBold.woff2" }],
    display: "swap"
});

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
            CalSans.className,
            "text-base md:text-xl lg:text-3xl bg-gradient-to-r from-slate-500 to-stone-500 inline-block text-transparent bg-clip-text pl-2",
            className
        )}
        >
            {children}
        </Tag>
    );
};