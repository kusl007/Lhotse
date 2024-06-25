import React from 'react'
import Image from 'next/image'
import img from "../../../public/images/ContactPageLanding.png"
import "./style.css"

const FormLanding = () => {
  return (
    <div className='bg-[#eedcc4] flex justify-between w-screen  pl-[3rem] sm:pl-[8.2rem] flex-col sm:flex-row'>
        <div className="flex justify-center items-center  mt-[2.5em] sm:mt-[7.5rem]">
            <div className='font-Montserrat text-black font-[900] uppercase text-center'>
                <h1 className=' text-[3.5rem] sm:text-[6.3rem]   sm:leading-[5rem] mr-[8.7rem] text-center'>CONNECT</h1>
                <h1 className=' text-[4rem]    sm:text-[9.2rem] sm:leading-[6.2rem] words word-1'>
                     <span>W</span>
                     <span>I</span>
                     <span>T</span>
                     <span>H</span>
                     <span></span>
                     <span> O</span>
                     <span>U</span>
                     <span>R</span>
                </h1>
                <h2 className='travel text-[7rem] font-[900] leading-[6rem] ml-[-1rem]  font-poppins '> TEAM</h2>
            </div>
            <div className="absolute left-[730px] text-[520px] font-[900] drop-shadow-2xl text-[#EEdcc4] pb-[80px]"> !</div>

        </div>
        <Image  src={img} alt="hello" width={100}
        height={100}/> 
        
        </div>
        
  )
}

export default FormLanding