'use client';
import styles from './style.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import Body from './Body';
import Footer from './Footer';
import Image from './Image';

const links = [
  {
    title: "Home",
    href: "/",
    src: "Home/Home.png"
  },
  {
    title: "Treks",
    href: "/treks",
    src: "Home/Treks.jpg"
  },
  {
    title: "Tours",
    href: "/tours",
    src: "Home/Tour.avif"
  },
  {
    title: "FAQ",
    href: "/faq",
    src: "Home/Faq.avif"
  },
  {
    title: "Enquire",
    href: "/enquire",
    src: "Home/Enquire.avif"
  }
]

export default function Index() {

  const [selectedLink, setSelectedLink] = useState({isActive: false, index: 0});

  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink}/>
          <Footer />
        </div>
        <Image src={links[selectedLink.index].src} isActive={selectedLink.isActive}/>
      </div>
    </motion.div>
  )
}