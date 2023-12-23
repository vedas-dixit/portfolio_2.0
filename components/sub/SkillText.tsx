"use client"
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
  return (
    <div className='w-full h-auto gap-6 flex flex-col items-center justify-center'>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
          
            <span className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-teal-800 to-slate-500" >Making apps with </span>
            <br/>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-teal-800 to-slate-500 font-bold text-6xl '>Modern Technologies</span>
        </motion.div>
    </div>
  )
}

export default SkillText