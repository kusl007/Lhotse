'use client'
import ZoomParallax from '../components/ZoomParallax/index';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis'
import Landing from '../components/Landing'
import ParallaxGallery from "../components/ParallaxGallery"
import { useState } from 'react';
import Preloader from '../components/Preloader';
import Description from "../components/Description"
import Character from '@/components/Paragraph_scroll_reveal';


const paragraph = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."


export default function Home() {

  
  const [isLoading, setIsLoading] = useState(true);
  setTimeout( () => {
    setIsLoading(false);
    document.body.style.cursor = 'default'
    window.scrollTo(0,0);
    
  }, 3000)
  

  useEffect( () => {
      const lenis = new Lenis()
     
      function raf(time:any) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
  },[])

  return (
      <main >
      
        {isLoading ? <Preloader />:
        <div>
     

          <Landing/>


          {/* <div className='mb-[10vh] opacity-0 lg:opacity-100'> 
          <Description/>
          </div> */}
          
          <div className=' py-[20vh] bg-gray-800  overflow-x-hiddden '>
      <Character paragraph={paragraph}  />          
      </div>
          <div>

          <ZoomParallax />
          </div>

          <div className='mt-[-35rem] opacity-0 lg:opacity-100'>
            {/* <p className='mb-[-30rem]'>Image gallery</p> */}
            
          <ParallaxGallery/>
          </div>
          </div>
}

          

      </main>
  )
}
