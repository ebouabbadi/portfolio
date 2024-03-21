'use client'
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {


  const greetings = ['Bonjour👋', 'Hello👋',   ' 👋سلام', 'ⴰⵣⵓⵍ👋'];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState<number>(0);
  // const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentGreetingIndex, greetings.length]);


  // const toggleDarkMode = () => {
  //   setDarkMode((prevMode) => !prevMode);
  // };


  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className='w-[70%] flex '>

        <motion.div className="w-[50%]  flex flex-col justify-center text-6xl font-bold gap-4"

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
          <motion.h1 className=" text-[#42446E] "
            key={currentGreetingIndex}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              scale: {
                type: "spring",
                damping: 20,
                stiffness: 100,
                restDelta: 0.001
              }
            }}

          >{greetings[currentGreetingIndex]}</motion.h1>

          <h1 className="text-[#42446E]">My name is</h1>
          <h1 className="text-gradient">El Mehdi Bouabbadi</h1>
          <h1 className="text-[#42446E]">Software Engineer</h1>
          <div className="flex gap-3">
      
              <Link href='/contact'><img className="" src="./contactMe.svg" /></Link>
      
            <a href="https://www.linkedin.com/in/ebouabbadi"><img className="" src="./in.svg" /></a>
            <a href="https://www.github.com/ebouabbadi"><img className="" src="./git.svg" /></a>

          </div>
        </motion.div>
        <div className="w-[50%] flex justify-end items-center">
          <motion.div
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
            <div className="hj-96 w-h96 border-gradient  rounded-full">
            <img className="h-96 w-96 rounded-full" src="./me2.png" alt="Me" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
