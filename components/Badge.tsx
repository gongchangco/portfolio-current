import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

export const Badge = ({
    text,
    href
} : {
    text: string;
    href: string;
}) => {
    return (
        <Link
            href={href}
            className="p-[3px] relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-500 to-stone-500 rounded-lg" />
            <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                {text}
            </div>
        </Link>
    )
}

