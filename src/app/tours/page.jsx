"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import image1 from "../../../public/images/Tour/img1.jpg"
import image2 from "../../../public/images/Tour/img2.jpg"
import image3 from "../../../public/images/Tour/img3.jpg"
import image4 from "../../../public/images/Tour/img4.jpg"
import "./style.css"
const Tours = () => {
  useEffect(() => {
    // JavaScript part (similar to componentDidMount and componentDidUpdate)
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');
    
    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function() {
      showSlider('next');
    }

    prevDom.onclick = function() {
      showSlider('prev');
    }
    
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
      nextDom.click();
    }, timeAutoNext);
    
    function showSlider(type) {
      let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
      let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
      
      if (type === 'next') {
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
      } else {
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
      }
      
      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
      }, timeRunning);

      clearTimeout(runNextAuto);
      runNextAuto = setTimeout(() => {
        nextDom.click();
      }, timeAutoNext);
    }
  }, []);

  return (
    <div className='py-[10vh]  overflow-x-hidden'>
    

      <div className="carousel ">
        <div className="list">
          {["https://images.unsplash.com/photo-1616166831462-48a3e9089c20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'https://images.unsplash.com/photo-1549888668-19281758dfbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpdHdhbnxlbnwwfHwwfHx8MA%3D%3D',
             'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F0aG1hbmR1fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1698673246561-f5895185adcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWxhbXxlbnwwfHwwfHx8MA%3D%3D'].map((img, index) => (
            <div className="item" key={index}>
              <img src={`${img}`} alt="" />
              <div className="content">
                <div className="author">LUNDEV</div>
                <div className="title">DESIGN SLIDER</div>
                <div className="topic">Tours</div>
                <div className="des">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, itaque eum neque officiis unde, eaque optio ratione aliquid assumenda facere ab et quasi ducimus aut doloribus non numquam. Explicabo, laboriosam nisi reprehenderit tempora at laborum natus unde. Ut, exercitationem eum aperiam illo illum laudantium?
                </div>
             
              </div>
            </div>
          ))}
        </div>

        <div className="thumbnail">
          {["https://images.unsplash.com/photo-1616166831462-48a3e9089c20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            'https://images.unsplash.com/photo-1549888668-19281758dfbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpdHdhbnxlbnwwfHwwfHx8MA%3D%3D',
             'https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2F0aG1hbmR1fGVufDB8fDB8fHww',
            'https://images.unsplash.com/photo-1698673246561-f5895185adcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWxhbXxlbnwwfHwwfHx8MA%3D%3D'].map((img, index) => (
            <div className="item " key={index}>
              <img src={`${img}` } width={400}  height={500} alt="" />
              <div className="content">
                <div className="title">Name Slider</div>
                <div className="description">Description</div>
              </div>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button id="prev">&lt;</button>
          <button id="next">&gt;</button>
        </div>

        {/* <div className="time"></div> */}
      </div>
    </div>
  );
};

export default Tours