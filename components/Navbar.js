"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center max-w-screen-xl mx-auto min-h-14 px-4 border-b">
            <Link className="font-bold text-2xl" href={'/'}>Seasonal Events Bangladesh</Link>
            <div className="text-lg font-medium flex gap-10">
                <Link className={`${usePathname() === '/' && 'text-green-600'}`} href={'/'}>Home</Link>
                <Link className={`${usePathname() === '/events' && 'text-green-600'}`} href={'/events'}>Events</Link>
                <Link className={`${usePathname() === '/about-us' && 'text-green-600'}`} href={'/about-us'}>About Us</Link>
            </div>
        </nav>
    )
}