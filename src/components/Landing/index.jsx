import React from 'react';
import { motion } from 'framer-motion';
import landingimg from '../../../public/images/landing.jpg';
import Image from 'next/image';

const Landing = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className='relative w-full h-[160vh] sm:h-[140vh] lg:h-[300vh]  z-[1]' >
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1.5 }}
        className="picture w-full h-full">
        <Image className='w-full h-full object-cover' src={landingimg} alt="" />
      </motion.div>

      <div className='w-full absolute top-0'>
        <motion.div 
          initial={{ y: -50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 1, duration: 1 }}
          className="h-full text max-w-screen-2xl mx-auto px-5 sm:px-10 text-[#e8efef]">
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 1.5, duration: 1 }}
            className="para  mt-[16rem] sm:mt-[20rem]">
            <p className='text-2xl sm:text-3xl'>Explore breathtaking landscapes,</p>
            <p className='text-2xl sm:text-3xl'>conquer challenging trails</p>
            <p className='text-2xl sm:text-3xl'>and create unforgettable memories</p>
            <p className='text-2xl sm:text-3xl'>Join us for an exhilarating journey </p>
            <p className='text-2xl sm:text-3xl'> into the wild!</p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 2, duration: 1 }}
            className="headings mt-5 sm:mt-10">
            <h1 className='text-6xl tracking-tighter leading-none  sm:text-[12rem] lg:text-[15rem] font-light'>Begin</h1>
            <h1 className='text-6xl tracking-tighter leading-none  sm:text-[12rem] lg:text-[15rem] font-light'>The</h1>
            <h1 className='text-6xl tracking-tighter leading-none  sm:text-[12rem] lg:text-[15rem] font-light'>Escapade</h1>
          </motion.div>
          
          <motion.div 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 2.5, duration: 1 }}
            className="para2 mt-10 sm:mt-20 sm:w-1/2 lg:w-1/3">
            <p className=' sm:text-3xl text-2xl'>
              We offer expert guides, and tailored itineraries, ensuring a safe, enjoyable, and unforgettable experience for all levels
            </p>
          </motion.div>
          
          <motion.a 
            initial={{ y: 50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ delay: 3, duration: 1 }}
            className='sm:text-xl sm:border-b-[1px] border-b-[.3px] border-zinc-100 pb-1 inline-block mt-10' 
            href="#">
            The Lhotse
          </motion.a>
        
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Landing;
