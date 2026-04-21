"use client";

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useInView } from 'react-intersection-observer';

import About from './Components/Homepage/About';
import Brands from './Components/Homepage/Brands';
import FeatureWork from './Components/Homepage/FeatureWork';

import BackgroundVideo from 'next-video/background-video';
import DoveOOH from '/videos/Dove-OOH.mp4';

import AxeFFImg from '../public/images/homepage/axe-fine-fragrances.jpg';
import DoveBridgertonImg from '../public/images/homepage/dove-bridgerton.jpg';
import DoveCrumblImg from '../public/images/homepage/dove-crumbl.jpg';
import DoveWhy2kImg from '../public/images/homepage/dove-why2k-project.jpg';
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
      cardUrl: "https://www.dove.com/ca/en/dove-bridgerton.html"
    },
    {
      cardBrand: "Dove",
      cardImg: DoveCrumblImg,
      cardProject: "Dove X Crumbl",
      cardUrl: "https://www.dove.com/ca/en/dove-crumbl.html"
    },
    {
      cardBrand: "Knorr",
      cardImg: KnorrFlavImg,
      cardProject: "Flavourmaina",
      cardUrl: "https://www.knorr.com/ca/en/flavourmania.html"
    },
    {
      cardBrand: "Axe",
      cardImg: AxeFFImg,
      cardProject: "Axe Fine Fragrances",
      cardUrl: "https://www.axe.com/ca/en/axe-fine-fragrance-collection.html"
    },
    {
      cardBrand: "Degree",
      cardImg: DegreeBWImg,
      cardProject: "Degree Body Wash",
      cardUrl: "https://www.degreedeodorant.com/ca/en/body-wash.html"
    },
    {
      cardBrand: "Dove",
      cardImg: DoveWhy2kImg,
      cardProject: "Dove Why2k",
      cardUrl: "https://www.dove.com/ca/en/dove-self-esteem-project/women.html"
    },
    {
      cardBrand: "Degree",
      cardImg: DegreeWBImg,
      cardProject: "Degree Whole Body",
      cardUrl: "https://www.degreedeodorant.com/ca/en/whole-body-deodorant.html"
    },
    {
      cardBrand: "Hellmann's",
      cardImg: HellmannBBBImg,
      cardProject: "Hellmann's Big Burger Battle",
      cardUrl: "https://www.hellmanns.com/ca/en/big-burger-battle.html"
    },
  ];

  const oohProjects = [
     {
      cardBrand: "Dove",
      cardImg: DoveBridgertonImg,
      cardProject: "Dove X Bridgerton",
      cardUrl: "https://www.dove.com/ca/en/dove-bridgerton.html"
    },
  ];

  const socialProjects = [
    {
      cardBrand: "Olly",
      cardSocial: "https://www.instagram.com/reel/DW2LCGDB4Hj/",
      cardUrl: "https://www.instagram.com/reel/DW2LCGDB4Hj/"
    },
    {
      cardBrand: "Hellmann's",
      cardSocial: "https://www.instagram.com/reel/DWjgN8JxdY5/",
      cardUrl: "https://www.instagram.com/p/DWjgN8JxdY5/"
    },
    {
      cardBrand: "LiquidIV",
      cardSocial: "https://www.instagram.com/p/DGWPe8fyEVl/",
      cardUrl: "https://www.instagram.com/p/DGWPe8fyEVl/"
    },
    {
      cardBrand: "Hellmann's",
      cardSocial: "https://www.instagram.com/p/DTifptCDp2Z/",
      cardUrl: "https://www.instagram.com/p/DTifptCDp2Z/?img_index=1"
    },
    {
      cardBrand: "Knorr",
      cardSocial: "https://www.instagram.com/reel/DFdbQrrpRxm/",
      cardUrl: "https://www.instagram.com/reels/DFdbQrrpRxm/"
    },
    {
      cardBrand: "Olly",
      cardSocial: "https://www.instagram.com/p/DU1iIXIjZBE/",
      cardUrl: "https://www.instagram.com/p/DU1iIXIjZBE/"
    },
    {
      cardBrand: "Knorr",
      cardSocial: "https://www.instagram.com/p/DQXVoHMkgAb/",
      cardUrl: "https://www.instagram.com/stories/highlights/17851924161559289/"
    },
    // {
    //   cardBrand: "Hellmann's",
    //   cardSocial: "https://www.instagram.com/reels/DV1LdwJjll_/",
    //   cardUrl: "https://www.instagram.com/reels/DV1LdwJjll_/"
    // },
    // {
    //   cardBrand: "Knorr",
    //   cardSocial: "https://www.instagram.com/reels/DL0YO4zp3Ht/",
    //   cardUrl: "https://www.instagram.com/reels/DL0YO4zp3Ht/"
    // },
  ];
  

  const featRef = useRef(null);

  const { ref: heroRef, inView } = useInView({
    threshold: 0.09,
    rootMargin: '0px'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent('heroScrolled', { detail: { past: !inView } }));
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
    hidden: { opacity: 0 },
    show: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.45,
      },

    }),
  }

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

      <About />

      <div ref={featRef}>
        <motion.div style={{ opacity, y }}>
          <FeatureWork sliderNumber={4} title="Websites" workType="dev" cardInfo={digitalProjects} />
        </motion.div>
      </div>

      <div ref={featRef}>
        <motion.div style={{ opacity, y }}>
          <FeatureWork sliderNumber={4} title="Social Media" workType="socials" cardInfo={socialProjects} />
        </motion.div>
      </div>

      <Brands />


    </div>
  );
}