"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto gap-6 flex flex-col items-center justify-center'>
<motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#ffffff] opacity-[0.9]"
        >
  
          <h1 className="Welcome-text text-[18px]">
            Hate for Studying is not a Problem, Hate for learning is a big problem :)
          </h1>
        </motion.div>
        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
          
            <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-teal-800 to-slate-500" >Making apps with modern technologies</span>
        </motion.div>
    </div>
  )
}

export default SkillText