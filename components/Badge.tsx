import Link from "next/link";
import React from "react";
import { IconFileInfo } from "@tabler/icons-react";

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
            <div className="px-4 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent flex justify-center items-center gap-3">
                <IconFileInfo size={18} />
                <span className="text-base">{text}</span>
            </div>
        </Link>
    )
}

