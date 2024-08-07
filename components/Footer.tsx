"use client"
import React from "react"

export const Footer = () => {
    return (
        <div className="mt-auto py-4 text-center text-xs text-neutral-500 border-t border-neutral-200">
            <span className="font-semibold">{new Date().getFullYear()}</span>
            &#8212; Built by Grace Ongchangco
        </div>
    )
}