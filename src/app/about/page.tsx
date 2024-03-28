'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const EducationData = [
    {
        id: 1,
        filier: 'PHYSICAL MATTER SCIENCES',
        school: 'Université Sultan Moulay Slimane',
        date: 'Sep 2018 - Sep 2022',
        local: 'Khouribga'
    },
    {
        id: 2,
        filier: 'SOFTWARE ENGINEER',
        school: '1337 coding school (42 Network)',
        local: 'Khouribga',
        date: 'Aug 2021 - Nov 2025'
    }
]

const certificationsData = [
    {
        id: 1,
        name: 'Meta Front-End Developer',
        link: 'https://coursera.org/share/bfc8449de25841a43bb1c50d47f7e4a9',
        img: './about/meta.png'
    },
    {
        id: 2,
        name: 'Advanced React',
        link: 'https://coursera.org/share/f4a7da0fe10fbca0fb9f61c920dc6100',
        img: './about/react.png'

    },
    {
        id: 3,
        name: 'Coding Interview Preparation',
        link: 'https://www.coursera.org/account/accomplishments/verify/32DPL6ERMS2Q',
        img: './about/cip.png'

    },
]

export default function About() {
    return (
        <div className=' w-full flex flex-col justify-center items-center gap-16 mt-32 '>
            <motion.div className='w-[70%]  bg-slate-100x'

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
                <div className="flex-col flex gap-10">
                    <h1 className="  text-[#42446E]  text-5xl font-bold flex justify-center"> About Me</h1>
                    <p className='text-[#666666] text-xl'>{'I am a full-stack developer deeply passionate about software engineering and personal advancement. With expertise in TypeScript, I specialize in architecting scalable solutions, harnessing React.js and Next.js for frontend experiences. Delving into backend development, I excel in crafting modular architecture with Nest.js and Node.js, fortified by robust.'}</p>
                </div>
            </motion.div>
            <motion.div className='w-[70%]  bg-sflate-100 gap-14 flex flex-col'

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
                <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Education</h1>
                {
                    EducationData.map((item: any) => (
                        <div key={item.id} className="flex-col flex gap-14 ">
                            <div className='flex justify-between '>
                                <div className="flex flex-col gap-4 ">
                                    <h1 className='text-[#666666] text-3xl'>{item.filier}</h1>
                                    <div className="flex space-x-24 text-[#A7A7A7] font-medium text-xl">
                                        <div className='flex space-x-4'>
                                            <img src='./about/education.svg' />
                                            <h2 className=''>{item.school}</h2>
                                        </div>
                                        <div className='flex space-x-4'>
                                            <img src='./about/local.svg' />
                                            <h2 className=''>{item.local}</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col h-full items-center bg-slfate-400 gap-4">
                                    <div className='bg-[#D7FFE0] p-1 w-36 rounded-full text-[#018C0F] flex justify-center items-center font-semibold'>Full Time</div>
                                    <div className="flex  h-full space-x-4">
                                        <img src='./about/date.svg' />
                                        <h2 className='text-[#A7A7A7] font-medium text-xl'>{item.date}</h2>
                                    </div>
                                </div>
                            </div>
                            <div className=' h-1 bg-[#EBEAED]' />
                        </div>
                    ))
                }
            </motion.div>
            <motion.div className='w-[70%]  bg-sflate-100 gap-14 flex flex-col p-6'

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
                <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Certifications</h1>
                <div className="flex-wrap flex w-full h-auto gap-14 justify-center ">
                    {
                        certificationsData.map((item: any) => (
                            <Link href={item.link} key={item.id} className='h-80 w-80 bg-white shadow-xl shadow-gray-200 rounded-xl flex-col hover:scale-110 duration-300'>
                                <div className="h-[90%]  rounded-t-xl"><img className='w-full h-full' src={item.img} /></div>
                                <div className="h-[10%]  items-center ">
                                    <h1 className=' font-medium text-gray-600 text-xl flex justify-center'>{item.name}</h1>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}
