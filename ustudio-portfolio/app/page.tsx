"use client";

import { useEffect } from 'react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

import About from './Components/Homepage/About';
import Brands from './Components/Homepage/Brands';
import FeatureWork from './Components/Homepage/FeatureWork';
import Callout from './Components/Homepage/Callout';

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
  

  const { ref: heroRef, inView } = useInView({
    threshold: 0.09,
    rootMargin: '0px'
  })

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent('heroScrolled', { detail: { past: !inView } }));
  }, [inView]);

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
        <motion.div className='bg-unilever/75 dark:bg-darkUnilever/75 h-screen w-full absolute top-0 left-0 z-5'
          animate={{ backgroundColor: ['rgba(138, 34, 97,.75)', 'rgba(0, 102, 204,0.75)', 'rgba(107, 162, 68,0.75)', 'rgba(226,115,40, .75)'] }}
          transition={{ duration: 4.5, delay: 2, repeat: Infinity, repeatType: 'reverse' }}>
        </motion.div>
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

      <Callout>
          <h2 className="mb-5 text-[30px] leading-[1.12] font-semibold tracking-[-0.03em] sm:text-[38px] lg:text-[44px]">AI Leading Agency</h2>
          <p className='text-[24px] leading-[1.6]'>Carrot cake brownie dragée tootsie roll apple pie bonbon wafer. Liquorice muffin marzipan sesame snaps tiramisu lollipop dessert cotton candy. Lollipop pastry cupcake danish tiramisu macaroon candy brownie biscuit.</p>
          <p className='mt-6 text-[24px] leading-[1.6]'>Gummies pudding lemon drops cake topping shortbread pastry danish. Sesame snaps brownie tootsie roll bonbon gingerbread tootsie roll gummies chocolate. Cotton candy cake sweet powder danish jujubes.</p>
      </Callout>

      
      <FeatureWork sliderNumber={4} title="Websites" workType="dev" cardInfo={digitalProjects} />
      

      <Callout bgColour='bg-darkPurple text-white'>
          <h2 className="mb-5 text-[30px] leading-[1.12] font-semibold tracking-[-0.03em] sm:text-[38px] lg:text-[44px]">We Get Your Message Out</h2>
          <p className='text-[24px] leading-[1.6]'>Carrot cake brownie dragée tootsie roll apple pie bonbon wafer. Liquorice muffin marzipan sesame snaps tiramisu lollipop dessert cotton candy. Lollipop pastry cupcake danish tiramisu macaroon candy brownie biscuit.</p>
          <p className='mt-6 text-[24px] leading-[1.6]'>Gummies pudding lemon drops cake topping shortbread pastry danish. Sesame snaps brownie tootsie roll bonbon gingerbread tootsie roll gummies chocolate. Cotton candy cake sweet powder danish jujubes.</p>
      </Callout>

     
      <FeatureWork sliderNumber={4} title="Social Media" workType="socials" cardInfo={socialProjects} />
      

      <Brands />


    </div>
  );
}