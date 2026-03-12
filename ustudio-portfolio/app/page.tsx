"use client";
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useInView } from 'react-intersection-observer';

import Brands from './Components/Homepage/Brands';
import FeatureCards from './Components/Homepage/FeatureWork';

import BackgroundVideo from 'next-video/background-video';
import DoveOOH from '/videos/Dove-OOH.mp4';

import AxeFFImg from '../public/images/homepage/axe-fine-fragrances.jpg';
import DoveBridgertonImg from '../public/images/homepage/dove-bridgerton.jpg';
import DoveCrumblImg from '../public/images/homepage/dove-crumbl.jpg';
import DoveWhy2kImg from '../public/images/homepage/dove-why2k.jpg';
import KnorrFlavImg from '../public/images/homepage/knorr-flavourmania.jpg';
import DegreeBWImg from '../public/images/homepage/degree-body-wash.jpg';
import DegreeWBImg from '../public/images/homepage/degree-whole-body.jpg';
import HellmannBBBImg from '../public/images/homepage/hellmanns-bigburgerbattle.jpg';


export default function Home() {

  const digitalProjects = [
        {
            cardBrand: "Dove",
            cardImg: DoveBridgertonImg,
            cardProject: "Dove X Bridgerton",
            cardUrl: "/"
        },
         {
            cardBrand: "Dove",
            cardImg: DoveCrumblImg,
            cardProject: "Dove X Crumbl",
            cardUrl: "/"
        },
         {
            cardBrand: "Knorr",
            cardImg: KnorrFlavImg,
            cardProject: "Flavourmaina",
            cardUrl: "/"
        },
            {
            cardBrand: "Axe",
            cardImg: AxeFFImg,
            cardProject: "Axe Fine Fragrances",
            cardUrl: "/"
        },
         {
            cardBrand: "Degree",
            cardImg: DegreeBWImg,
            cardProject: "Degree Body Wash",
            cardUrl: "/"
        },
        {
            cardBrand: "Dove",
            cardImg: DoveWhy2kImg,
            cardProject: "Dove Why2k",
            cardUrl: "/"
        },
          {
            cardBrand: "Degree",
            cardImg: DegreeWBImg,
            cardProject: "Degree Whole Body",
            cardUrl: "/"
        },
        {
            cardBrand: "Hellmann's",
            cardImg: HellmannBBBImg,
            cardProject: "Hellmann's Big Burger Battle",
            cardUrl: "/"
        },
    ];

  // const heroRef = useRef(null);
  const featRef = useRef(null);

  const { ref: heroRef, inView } = useInView({
    threshold: 0.09,
    rootMargin: '0px'
  })

  useEffect(() => {
    if (typeof window === 'undefined' ) return;
    window.dispatchEvent(new CustomEvent('heroScrolled', { detail: {past : !inView}}));
  }, [inView]);

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

      <div ref={heroRef} className='flex justify-center items-center w-full relative overflow-hidden h-screen lg:min-h-[630px]'>
        <div className='bg-darkPurple/75 dark:bg-darkUnilever/75 h-screen w-full absolute top-0 left-0 z-5'></div>
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

        <div ref={featRef}>
          <motion.div  style={{ opacity, y }}><FeatureCards sliderNumber={4} campaign={false} title="Latest Digital Web" cardInfo={digitalProjects} /></motion.div>
        </div>

      <Brands />

      
    </div>
  );
}