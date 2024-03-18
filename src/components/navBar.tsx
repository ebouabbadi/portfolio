import Link from 'next/link'
import React from 'react'

export default function NavBar() {
    return (
        <div className='flex justify-center'>
            <nav className="fixed w-[70%] h-20 flex justify-between text-2xl bg-slate-400x bg-white">
                <div className=" bg-red-500x w-[6%] flex justify-center">
                    <button className='hover:scale-110 duration-500'><img src='./dark.svg' /></button>
                </div>
                <div className="flex gap-10 text-[#666666] font-medium w-[80%] justify-end mr-12 items-center">
                    <Link className='hover:scale-110 duration-500 text-[#13B0F5]' href={'/'}>Home</Link>
                    <Link className='hover:scale-110 duration-500 ' href={'/about'}>About</Link>
                    <Link className='hover:scale-110 duration-500 ' href={'/techStack'}>Tech Stack</Link>
                    <Link className='hover:scale-110 duration-500 ' href={'/projects'}>Projects</Link>
                    <Link className='hover:scale-110 duration-500 ' href={'/contact'}>Contact</Link>
                </div>
                <div className='w-[14%] flex justify-center items-center text-white bg-orange-300x h-full'>
                    <a className='bg-[#42446E]  rounded-full w-48 h-12 flex justify-center items-center font-medium hover:scale-110 duration-500'href='./cv.pdf' download>Download CV
                    </a>
                </div>
            </nav>
        </div>
    )
}
