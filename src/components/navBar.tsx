'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function NavBar({}: {}) {
    const [darkMode, setDarkMode] = useState(false);

    
    const [router, setRouter] = useState<string>();


    return (
        <div className='flex justify-center'>
            <nav className="fixed w-[70%] h-20 flex justify-between text-2xl bg-slate-400x bg-white dark:bg-black">
                <div className=" bg-red-500x w-[6%] flex justify-center">
                    <button onClick={() => { setDarkMode((prevMode) => !prevMode)}} className='hover:scale-110 duration-500'><img src='./dark.svg' /></button>
                </div>
                <div className="flex gap-10 text-[#666666] font-medium w-[80%] justify-end mr-12 items-center">
                    <Link onClick={ () => setRouter('home')} className={`hover:scale-110 duration-500 ${router == 'home' ? 'text-gradient2': 'text-[#666666]' }`} href={'/'}>Home</Link>
                    <Link onClick={ () => setRouter('about')} className={`hover:scale-110 duration-500 ${router == 'about' ? 'text-gradient2': 'text-[#666666]' }`} href={'/about'}>About</Link>
                    <Link onClick={ () => setRouter('stack')} className={`hover:scale-110 duration-500 ${router == 'stack' ? 'text-gradient2': 'text-[#666666]' }`} href={'/techStack'}>Tech Stack</Link>
                    <Link onClick={ () => setRouter('projects')} className={`hover:scale-110 duration-500 ${router == 'projects' ? 'text-gradient2': 'text-[#666666]' }`} href={'/projects'}>Projects</Link>
                    <Link onClick={ () => setRouter('contact')} className={`hover:scale-110 duration-500 ${router == 'contact' ? 'text-gradient2': 'text-[#666666]' }`} href={'/contact'}>Contact</Link>
                </div>
                <div className='w-[14%] flex justify-center items-center text-white bg-orange-300x h-full'>
                    <a className='bg-[#42446E]  rounded-full w-44 h-10 flex justify-center items-center font-medium hover:scale-110 duration-500 text-xl border-gradient'href='./cv.pdf' download>Download CV
                    </a>
                </div>
            </nav>
        </div>
    )
}
