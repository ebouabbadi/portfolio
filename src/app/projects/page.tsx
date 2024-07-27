'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

const projectsData = [
  {
    name: 'INCEPTION',
    description: `This is sample project description random things ption random thi ption random things are here in description Thngs are here in description Th ption random things are here in description Th are here in description This is sample project lorem ipsum generator for dummy content`,
    stack: 'js, ts, nest ...',
    link: 'https://github.com/ebouabbadi/INCEPTION',
    preview: './projects/inception.jpg'
  },
  {
    name: 'INCEPTION2',
    description: `This is sam This is sample project rator for dummy content`,
    stack: 'js, ts, nest ...',
    link: 'https://github.com/ebouabbadi/INCEPTION',
    preview: './projects/inception.jpg'
  },
  {
    name: 'INCEPTION3',
    description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
    stack: 'js, ts, nest ...',
    link: 'https://github.com/ebouabbadi/INCEPTION',
    preview: './projects/inception.jpg'
  },
  {
    name: 'INCEPTION4',
    description: `This is tent`,
    stack: 'js, ts, nest ...',
    link: 'https://github.com/ebouabbadi/INCEPTION',
    preview: './projects/inception.jpg'
  },
  {
    name: 'INCEPTION5',
    description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
    stack: 'js, ts, nest ...',
    link: 'https://github.com/ebouabbadi/INCEPTION',
    preview: './projects/inception.jpg'
  },
]

interface ProjectType {
  name: number;
  description: string;
  stack: string;
  link: string;
  preview: string;
}


export default function Projects() {

  const [selectPj, setSelectPj] = useState<ProjectType | null>(null);

  return (
    <div className='mt-32 w-full flex flex-col justify-center items-center'>
      <div className='w-[70%]  bg-slate-100x'>
        <div className="flex-col flex gap-10 ">
          <h1 className="text-[#42446E]  text-5xl font-bold flex">Projects</h1>
          <h2 className='text-[#666666]  text-xl flex'>{`Things I’ve built so far`}</h2>
        </div>
        {
          !selectPj ? <div className="mt-14 bg-slafte-500 gap-5 flex-wrap flex w-full h-auto">
            {
              projectsData.map((item: any) => (
                <motion.div key={item.id} className='w-80 h-auto bg-white shadow-lg shadow-gray-200 rounded-xl flex-col'
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 20,
                      stiffness: 100,
                      restDelta: 0.001
                    }
                  }}
                >
                  <div className="rounded-t-xl "><img className='w-full h-full rounded-t-xl' src={item.preview} /></div>
                  <div className="flex flex-col items-center overflow-hidden  p-2 bg-slate-00">
                    <h1 className=' font-medium text-2xl bg-slafte-400 mt-2'>{item.name}</h1>
                    <div className='h-32'>
                      <p className=' text-lg flexf line-clamp-4 text-center  text-[#666666] font-light'>{item.description}</p>
                      <div className='flex gap-4 bgd-slate-500 w-full justify-center'>
                        <button onClick={() => setSelectPj(item)}>More Info</button>
                      </div>
                    </div>
                    <div className='flex justify-between p-4 bg-sdlate-400 w-full h-full bg-bldack items-center'>
                      <div className='flex space-x-2'>
                        <img className='' src="./projects/view.svg" />
                        <a href={''} className=' font-semibold underline'>Live Preview</a>
                      </div>
                      <div className='flex space-x-2'>
                        <img className='' src="./projects/git.svg" />
                        <a href={item.link} className=' font-semibold underline'>View Code</a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div> : <div className="w-full mt-10 h-auto bg-[#F8F3F3] shafdow-lg roundedf-xl sfhadow-sky-400">
            <div className="w-full h-12 flex justify-between items-center  hbg-slate-400">
              <h1 className='ml-4 text-xl'>Name project {(selectPj.name)}</h1>
              <button className='mr-4 bg-white rounded-full p-2' onClick={() => setSelectPj(null)}><img src='./projects/cancel.svg' /></button>
            </div>
            <div className="w-full h-full flex bg-shlate-600">
              <div className=" p-4 w-[50%] bgj-slate-200 flex-col flex justify-center items-center">
                <img className='w-[300px] h-[300px] rounded-t-xl' src={'./projects/inception.jpg'} />
              </div>
              <div className="w-[60%] bjg-slate-300"> info ...</div>
            </div>
          </div>
        }
      </div>
    </div>)
}
