"use client";

import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState(false);

    function handleClick() {
        setOpen(prev => !prev)
    }


    return (
        <header className="fixed w-full top-0 z-10">
            <nav className="bg-white flex justify-between items-center max-w-screen-xl mx-auto min-h-14 px-4 border-b flex-col md:flex-row">
                <h1 className={`font-bold text-xl md:text-2xl py-3 md:border-none flex justify-between w-full transition-all ${open && 'border-b'}`} ><Link href={'/'}>Seasonal Events Bangladesh</Link> <span className="md:hidden cursor-pointer" onClick={handleClick}>&#9776;</span></h1>
                <div className={`text-lg font-medium flex *:py-3 md:gap-10 w-full md:w-2/3 md:justify-end text-center flex-col md:flex-row overflow-hidden transition-all duration-300 ${open ? 'h-[156px]' : 'h-0'} md:h-auto`}>
                    <Link onClick={handleClick} className='hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-600' href={'/'}>Home</Link>
                    <Link onClick={handleClick} className='hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-600' href={'/seasons'}>Seasons</Link>
                    <Link onClick={handleClick} className='hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-600' href={'/about-us'}>About Us</Link>
                </div>
            </nav>
        </header>
    )
}