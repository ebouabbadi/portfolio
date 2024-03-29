'use client'

import { motion } from 'framer-motion'
import React from 'react'

const projectsData = [
  {
    id: 1,
    name: 'Project Tile goes here',
    description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
    stack: 'js, ts, nest ...'
  },
  {
    id: 1,
    name: 'Project Tile goes here',
    description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
    stack: 'js, ts, nest ...'
  },
  {
    id: 1,
    name: 'Project Tile goes here',
    description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
    stack: 'js, ts, nest ...'
  },
  {
    id: 1,
    name: 'Project Tile goes here',
    description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
    stack: 'js, ts, nest ...'
  },
  {
    id: 1,
    name: 'Project Tile goes here',
    description: `This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content`,
    stack: 'js, ts, nest ...'
  }
]

export default function Projects() {
  return (
    <div className='mt-32 w-full flex flex-col justify-center items-center'>
    <div className='w-[70%]  bg-slate-100x'>
        <div className="flex-col flex gap-10 ">
            <h1 className="text-[#42446E]  text-5xl font-bold flex justify-center">Projects</h1>
            <h2 className='text-[#666666] justify-center text-xl flex'>{`Things I’ve built so far`}</h2>
        </div>
        <div className="mt-14 bg-slafte-500 flex-wrap flex w-full h-auto gap-14 justify-center">
          {
            projectsData.map((item: any)=>(
           <motion.div key={item.id} className='h-[500px] w-80 bg-white shadow-lg shadow-gray-200 rounded-xl flex-col'
           
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
            <div className="h-[45%] bg-oranfge-300 rounded-t-xl"><img className='w-full h-full' src='./projectimg.png'/></div>
            <div className="h-[55%] flex flex-col items-center "> 
              <h1 className=' font-medium text-2xl'>{item.name}</h1>
              <p className=' text-lg p-3 text-[#666666] font-light'>{item.description}</p>
              <div className='flex gap-4'>
                  <h1>teck stack: </h1>
                  <p>{item.stack}</p>
              </div>
              <div className='flex justify-betweefn p-f4'>
                <h1>Live Preview</h1>
                <h1>View Code</h1>
              </div>
            </div>
           </motion.div>
              ))
            }
        </div>
    </div> 
</div>  )
}
