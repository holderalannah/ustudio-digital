"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Image from "next/image";
import Container from './Components/Container';
import Ipad from '../public/images/Ipad.png';
import Brands from './Components/Homepage/Brands';
import FeatureCards from './Components/Homepage/FeatureCards';
import Campaigns from './Components/Homepage/Campaigns';

import BackgroundVideo from 'next-video/background-video';
import DoveOOH from '/videos/Dove-OOH.mp4';

import DoveCompImg from '../public/images/digital/dove-compliment.jpg';
import DoveCrumblImg from '../public/images/digital/dove-x-crumble.jpg';
import DoveHolidayImg from '../public/images/digital/dove-holiday.jpg';
import KnorrFlavImg from '../public/images/digital/knorr-flavourmania.jpg';
import KnorrPastesImg from '../public/images/digital/knorr-pastes.jpg';


export default function Home() {

  const digitalProjects = [
         {
            cardBrand: "Dove",
            cardImg: DoveCrumblImg,
            cardProject: "Dove X Crumb",
            cardUrl: "/"
        },
        {
            cardBrand: "Dove",
            cardImg: DoveHolidayImg,
            cardProject: "Holiday Limited Edition",
            cardUrl: "/"
        },
        {
            cardBrand: "Dove",
            cardImg: DoveCompImg,
            cardProject: "Change the Compliment",
            cardUrl: "/"
        },
        {
            cardBrand: "Knorr",
            cardImg: KnorrFlavImg,
            cardProject: "Flavourmaina",
            cardUrl: "/"
        },
        {
            cardBrand: "Knorr",
            cardImg: KnorrPastesImg,
            cardProject: "Premium Flavour Base Pastes",
            cardUrl: "/"
        },
    ];

  const ipadDiv = useRef(null);
  const featRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: featRef,
    offset: ['start end', 'center center'],
  });

  const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.8], [0, 0.65, 1]);
  const rawY = useTransform(scrollYProgress, [0, 0.8], [30, 0]); // 30px down -> 0

  const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 20 });
  const y = useSpring(rawY, { stiffness: 120, damping: 24 });

  const variants = {
    hidden: {opacity: 0},
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.45,
      },
      
    }),
  }

  const space = '\u00A0';
  const headLine = `Hello from your in house agency`;

  return (
    <div id="home-page" className="">

      <div className='flex justify-center items-center w-full relative overflow-hidden h-screen lg:min-h-[630px]'>
        <div className='bg-darkPurple/75 h-screen w-full absolute top-0 left-0 z-5'></div>
        <BackgroundVideo src={DoveOOH}>
          <motion.h1 initial="hidden" variants={variants} whileInView="show" className="relative text-white font-normal text-5xl mx-auto text-center leading-[0.85] tracking-[-2px] z-10 md:text-6xl lg:text-8xl lg:tracking-[-3.4px] lg:max-w-[638px]">
          {headLine.split(' ').map((word, i) => 
          <motion.span key={`${word}-${i}`} variants={variants} custom={i}>
            {`${word} `}
            </motion.span>
          )}
          </motion.h1>
        </BackgroundVideo>
      </div>

      <Container>
        <div ref={featRef}>
          <motion.div  style={{ opacity, y }}><FeatureCards sliderNumber={4} campaign={false} title="Latest Digital Web" cardInfo={digitalProjects} /></motion.div>
        </div>
      </Container>

      <Brands />

      
    </div>
  );
}