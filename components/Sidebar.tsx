"use client";
import { navLinks } from '@/data';
import { Navlink } from '@/types/navlink';
import { usePathname } from 'next/navigation';
import React from 'react';
import { twMerge } from "tailwind-merge";
import { Heading } from './Heading';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { socials } from '@/data/socials';
import { Badge } from './Badge';

export const Sidebar = () => {
    return (
        <>
            <AnimatePresence>
                {(
                    <motion.div
                        initial={{ x: -200 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.2, ease: "linear" }}
                        exit={{ x: -200 }}
                        className='px-8 z-[100] py-10 lg:relative h-screen left-0 flex flex-col justify-between'
                    >
                        <div className=''>
                            <SidebarHeader />
                            <Navigation />
                        </div>
                        <Badge href="/resume" text="Read Resume" />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export const Navigation = () => {
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;

    return (
        <div className="flex flex-col space-y-4 my-8 sm:my-10 relative z-[100]">
            {navLinks.map((link: Navlink) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={twMerge("text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm", isActive(link.href) && "bg-white shadow-lg text-primary")}
                >
                    <link.icon className={twMerge("h-4 w-4 flex-shrink-0", isActive(link.href) && "text-sky-500")} />
                    <span className="hidden sm:inline">{link.label}</span>
                </Link>
            ))}

            <Heading as="p" className="text-sm md:text-sm lg:text-sm pt-6 sm:pt-10 px-2 hidden sm:block">
                Socials
            </Heading>
            {socials.map((link: Navlink) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={twMerge(
                         "text-secondary hover:text-primary transition duration-200 flex items-center space-x-2 py-2 px-2 rounded-md text-sm"
                    )}
                >
                    <link.icon
                        className={twMerge(
                            "h-4 w-4 flex-shrink-0",
                            isActive(link.href) && "text-sky-500"
                        )}
                    />
                    <span className="hidden sm:inline">{link.label}</span>
                </Link>
            ))}
        </div>
    )
}

const SidebarHeader = () => {
    return(
        <div className="flex space-x-2">
            <Image
                src="/favicon.ico"
                alt="Image"
                height={40}
                width={40}
                className="object-cover object-top rounded-full flex-shrink-0"
            />
            <div className="flex-col hidden sm:flex text-sm">
                <p className="font-bold text-primary">Grace O.</p>
                <p className="font-light text-secondary">Developer</p>
            </div>
        </div>
    )
}