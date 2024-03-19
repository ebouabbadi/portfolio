'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function Contact() {
  return (
    <div className=' w-full flex flex-col justify-center items-center gap-16 mt-32 '>
    <motion.div className='w-[70%]  bgf-slate-100 flex justify-center items-center'

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
       <div className="flex-col flex gap-10 mt-36 ">
            <h1 className="text-[#1E0E62]  text-5xl font-bold flex justify-center">For any questions please mail us:</h1>
            <Link href={'https://ebouabbadi@gmail.com'} className="text-[#13B0F5]  text-5xl font-bold flex justify-center">ebouabbadi@gmail.com</Link>
        </div>
    </motion.div>
    </div> )
}
