"use client"
import React from 'react'
import TrekParallex from "../../components/TrekParallex"
import Character from "@/components/Paragraph_scroll_reveal"
import {projects} from "@/data"
import Card from "@/components/Card"
import Lenis from '@studio-freight/lenis'

import { useEffect, useRef } from 'react';
import { useScroll } from "framer-motion"
import Link from 'next/link'







  const paragraph = "Experience the ultimate trekking adventure with Lhotse. Explore stunning landscapes, conquer challenging trails, and immerse yourself in the beauty of nature. Join us today!"


const page = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })


  return (
    <div className='bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800  min-h-screen w-[120vw] sm:w-full overflow-x-hidden'>


      <TrekParallex/>



      <div className=' py-[20vh] bg-gray-800  '>
      <Character paragraph={paragraph}  />          
      </div>


      <div className=' opacity-0 lg:opacity-100'>
         
      <div class="text-center text-white px-6 mb-[10vh]">
    <h1 class="text-8xl font-bold underline p-[3vh] mb-10">Currently Running Treks</h1>
    <p class="text-lg mb-6">Experience the adventure of a lifetime with our currently running treks, showcasing the best of Nepal's Himalayan beauty. Traverse through lush forests, serene valleys, and rugged terrain as you explore iconic routes like Annapurna Base Camp, Everest Base Camp, Mardi himal, Tilicho and Langtang Valley. Our expert guides ensure a safe and enriching journey, where you'll not only witness breathtaking mountain vistas but also immerse yourself in local cultures and traditions.</p>
    <p class="text-lg">Whether you're a seasoned trekker or embarking on your first high-altitude adventure, our carefully curated treks offer something for everyone. Join us and discover why the Himalayas are a magnet for adventurers from around the globe.</p>
  </div>


      <div ref={container}>
      {
        projects.map( (project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
        })
      }
      </div>
    </div>
       
       {/* <TrekTabs/> */}
       <div className='h-screen'>

       </div>
    </div>
    
  )
}

export default page