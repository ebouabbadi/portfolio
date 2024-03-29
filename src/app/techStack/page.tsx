'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const skilsData = [
    {
        id: 1,
        link: 'https://www.w3schools.com/html/',
        icone: '/skils/html.png',

    },
    {
        id: 2,
        link: 'https://www.w3schools.com/css/',
        icone: '/skils/css.png',
    },
    {
        id: 3,
        link: 'https://www.javascript.com/',
        icone: '/skils/javascript.png',
    },
    {
        id: 4,
        link: 'https://www.typescriptlang.org/',
        icone: '/skils/typscript.png',
    },
    {
        id: 5,
        link: 'https://react.dev/learn',
        icone: '/skils/reactjs.png',
    },
    {
        id: 6,
        link: 'https://nextjs.org/learn',
        icone: '/skils/nextjs.png',
    },
    {
        id: 7,
        link: 'https://nodejs.org/en',
        icone: '/skils/nodejs.png',
    },
    {
        id: 8,
        link: 'https://nestjs.com/',
        icone: '/skils/nestjs.png',
    },
    {
        id: 9,
        link: 'https://www.docker.com/',
        icone: '/skils/docker.png',
    },
   
    {
        id: 10,
        link: 'https://fr.wikipedia.org/wiki/C_(langage)',
        icone: '/skils/c.png',
    },
    {
        id: 11,
        link: 'https://cplusplus.com/',
        icone: '/skils/cpp.png',
    },
    {
        id: 12,
        link: 'https://tailwindcss.com/',
        icone: '/skils/tailwind.png',
    },
    {
        id: 13,
        link: '',
        icone: '/skils/vscode.png',
    },
    {
        id: 14,
        link: 'https://code.visualstudio.com/',
        icone: '/skils/boostrap.png',
    },
    {
        id: 15,
        link: 'https://www.prisma.io/',
        icone: '/skils/prisma.png',
    },
    {
        id: 16,
        link: 'https://www.postgresql.org/',
        icone: '/skils/postgresql.png',
    },
    {
        id: 17,
        link: 'https://www.odoo.com/',
        icone: '/skils/odoo.png',
    },
    {
        id: 18,
        link: 'https://www.postman.com/',
        icone: '/skils/postman.png',
    },
    {
        id: 19,
        link: 'https://www.linux.org/',
        icone: '/skils/linux.png',
    },
    {
        id: 20,
        link: 'https://git-scm.com/',
        icone: '/skils/git.png',
    },
    {
        id: 21,
        link: 'https://github.com/',
        icone: '/skils/github.png',
    },
   
]

export default function TechStack() {
    return (
        <div className='mt-32 w-full flex flex-col justify-center items-center'>
            <div className='w-[70%] '>
                <div className="flex-col flex gap-10 w-full ">
                    <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">My Tech Stack</h1>
                    <h2 className='text-[#666666] flex justify-center text-xl'>{`Technologies I’ve been working with recently`}</h2>
                </div>
                <div className=" flex-wrap flex w-full h-auto gap-10 justify-center mt-24 ">
                    {
                        skilsData.map((item: any) =>(
                            <motion.div   key={item.id}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                              duration: 0.3,
                              ease: [0, 0.71, 0.2, 1.01],
                              scale: {
                                type: "spring",
                                damping: 20,
                                stiffness: 100,
                                restDelta: 0.001
                              }
                            }}
                            >
                            <Link href={item.link} className="flex items-center justify-center duration-300 hover:scale-110 ">
                                <Image loading='lazy' width={100} height={100} alt='dd'  className='' src={item.icone}/>
                            </Link>
                            </motion.div>
                        ))
                    }
                </div>
            </div> 
        </div>
    )
}
