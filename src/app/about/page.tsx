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
    },
    {
        id: 2,
        name: 'Advanced React',
        link: 'https://coursera.org/share/f4a7da0fe10fbca0fb9f61c920dc6100',
    },
    {
        id: 3,
        name: 'Coding Interview Preparation',
        link: 'https://www.coursera.org/account/accomplishments/verify/32DPL6ERMS2Q',
    },
]

export default function About() {
    return (
        <div className=' w-full flex flex-col justify-center items-center gap-16 mt-32 '>
            <div className='w-[70%]  bg-slate-100x'>
                <div className="flex-col flex gap-10">
                    <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center"> About Me</h1>
                    <p className='text-[#666666] text-xl'>{'I am a full-stack developer deeply passionate about software engineering and personal advancement. With expertise in TypeScript, I specialize in architecting scalable solutions, harnessing React.js and Next.js for frontend experiences. Delving into backend development, I excel in crafting modular architecture with Nest.js and Node.js, fortified by robust.'}</p>
                </div>
            </div>
            <div className='w-[70%]  bg-sflate-100 gap-14 flex flex-col'>
                <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Education</h1>
                {
                    EducationData.map((item: any) => (
                        <div key={item.id} className="flex-col flex gap-14 ">
                            <div className='flex justify-between '>
                                <div className="flex flex-col gap-4 ">
                                    <h1 className='text-[#666666] text-3xl'>{item.filier}</h1>
                                    <div className="flex space-x-24 text-[#A7A7A7] font-medium text-xl">
                                        <h2 className=''>{item.school}</h2>
                                        <h2 className=''>{item.local}</h2>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-10">
                                    <h2 className='text-[#A7A7A7] font-medium text-xl'>{item.date}</h2>
                                </div>
                            </div>
                            <div className=' h-1 bg-[#EBEAED]' />
                        </div>

                    ))
                }
            </div>
            <div className='w-[70%]  bg-sflate-100 gap-14 flex flex-col'>
                <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Certifications</h1>
                {
                    certificationsData.map((item: any) => (
                        <div key={item.id} className="flex-col flex gap-14 ">
                            <div className='flex justify-between '>
                                <div className="flex flex-col gap-4 ">
                                    <h1 className='text-[#666666] text-3xl'>{item.name}</h1>
                                    <div className="flex space-x-24 text-[#A7A7A7] font-medium text-xl">
                                        <Link href={item.link} className=''>{item.link}</Link>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-10">
                                    <h2 className='text-[#A7A7A7] font-medium text-xl'>{item.date}</h2>
                                </div>
                            </div>
                            <div className=' h-1 bg-[#EBEAED]' />
                        </div>

                    ))
                }
            </div>
        </div>
    )
}
