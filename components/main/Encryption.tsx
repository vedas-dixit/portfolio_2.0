'use client';
import styles from './page.module.scss'
import Image from 'next/image';

import {
    floating1, 
    floating2, 
    floating3, 
    floating4, 
    floating5, 
    floating6, 
    floating7, 
    floating8
} from '../data'

export default function Encryption() {

 
  return (
    <main className={styles.main}>
      <div  className={styles.plane}>
          <Image 
            src={floating1}
            alt='image'
            width={250}
          />
           <Image 
            src={floating2}
            alt='image'
            width={300}
          />
          <Image 
            src={floating7}
            alt='image'
            width={225}
          />
      </div>
      <div className={styles.plane}>
          <Image 
            src={floating4}
            alt='image'
            width={280}
          />
           <Image 
            src={floating6}
            alt='image'
            width={300}
          />
          <Image 
            src={floating8}
            alt='image'
            width={225}
          />
      </div>
      <div className={styles.plane}>
          <Image 
            src={floating3}
            alt='image'
            width={250}
          />
           <Image 
            src={floating5}
            alt='image'
            width={300}
            
          />
      </div>
      <div className={styles.title}>
      <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-teal-800 to-slate-500" >Wildlife Photography</span>
        <p className='text-3xl'>HOBBY</p>
      </div>
    </main>
  )
}
