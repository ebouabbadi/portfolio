'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function NavBar() {


const [router, setRouter] = useState<string>('home');

useEffect(() => {
    console.log(router);
}, [router])

    return (
        <div className='flex justify-center'>
            <nav className="fixed w-[70%] h-20 flex justify-between text-2xl bg-slate-400x bg-white">
                <div className=" bg-red-500x w-[6%] flex justify-center">
                    <button className='hover:scale-110 duration-500'><img src='./dark.svg' /></button>
                </div>
                <div className="flex gap-10 text-[#666666] font-medium w-[80%] justify-end mr-12 items-center">
                    <Link onClick={ () => setRouter('home')} className={`hover:scale-110 duration-500 ${router == 'home' ? 'text-[#13B0F5]': 'text-[#666666]' }`} href={'/'}>Home</Link>
                    <Link onClick={ () => setRouter('about')} className={`hover:scale-110 duration-500 ${router == 'about' ? 'text-[#13B0F5]': 'text-[#666666]' }`} href={'/about'}>About</Link>
                    <Link onClick={ () => setRouter('stack')} className={`hover:scale-110 duration-500 ${router == 'stack' ? 'text-[#13B0F5]': 'text-[#666666]' }`} href={'/techStack'}>Tech Stack</Link>
                    <Link onClick={ () => setRouter('projects')} className={`hover:scale-110 duration-500 ${router == 'projects' ? 'text-[#13B0F5]': 'text-[#666666]' }`} href={'/projects'}>Projects</Link>
                    <Link onClick={ () => setRouter('contact')} className={`hover:scale-110 duration-500 ${router == 'contact' ? 'text-[#13B0F5]': 'text-[#666666]' }`} href={'/contact'}>Contact</Link>
                </div>
                <div className='w-[14%] flex justify-center items-center text-white bg-orange-300x h-full'>
                    <a className='bg-[#42446E]  rounded-full w-48 h-12 flex justify-center items-center font-medium hover:scale-110 duration-500'href='./cv.pdf' download>Download CV
                    </a>
                </div>
            </nav>
        </div>
    )
}
