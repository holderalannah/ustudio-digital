"use client";
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import Cta from './Cta';
import Image from 'next/image';
import UstudioDovePromo from '../../public/images/ustudio-dove-hair-promo.jpg';

export default function FooterCallout(){

    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'center center'],
    });

    const scale = useTransform(scrollYProgress, [0, 0.15, 0.8], ["scale(2)", "scale(1.5)", "scale(1)"]);
    const filter = useTransform(scrollYProgress, [0, 0.9], ["blur(5px)", "blur(0px)"]);

    const transfrom = useSpring(scale, { stiffness: 120, damping: 24 });

    const headline = "Ready to create something unmissable?";
    const paragraph = "Reach out to U-Studio Toronto "
    const linkText = "here";

    // const variants = {
    //     hidden: {opacity: 0},
    //     show: (i) => ({
    //     y: 0,
    //     opacity: 1,
    //     transition: {
    //         delay: i * 0.3,
    //         type: "spring",
    //         bounce: 0.4,
    //     },
    //     }),
    // }

    const pullupVariant = {
        initial: { y: 20, opacity: 0 },
        animate:{
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.8,
                type: "spring",
                bounce: 0.5,
            },
        },
    };

    const thisyear = new Date();
    const year = thisyear.getFullYear();

    return(
        <div ref={ref} className="bg-darkPurple dark:bg-darkUnilever/75 pt-16 text-white text-center w-full lg:pt-28 relative overflow-hidden">
            <motion.div style={{ filter, transfrom }} className='absolute top-0'>
                <Image src={UstudioDovePromo} alt="ustudio fove hair promotion" className='object-cover h-screen opacity-20 z-10 m-auto md:h-auto lg:h-screen' />
            </motion.div>
         <div className='relative z-20 pb-16 lg:pb-28'>
               <motion.h3 initial="hidden"   whileInView="show" className='text-[36px] mx-auto max-w-[330px] font-normal leading-[0.9] relative size-full text-center text-white tracking-[-1.8px] mb-5 lg:mb-10 lg:text-[60px] lg:max-w-[620px]'>
                {headline.split(' ').map((word, i) => 
                     <motion.span key={`${word}-${i}`}  custom={i}>
                        {`${word} `}
                    </motion.span>
                )}
               </motion.h3>

            <motion.p  className='text-lg mb-5 lg:mb-10'>
                {paragraph} 
                <motion.a className='font-bold inline-block' href="ustudiotoronto@ustudio.global">
                    {linkText}
                </motion.a>.
            </motion.p>

            <motion.div initial="initial" variants={pullupVariant} whileInView="animate">
                <Cta text="Learn More" url="/about-us" />
            </motion.div>
         </div>
          <div className='bg-darkPurple/75 dark:bg-black/10 py-5 flex justify-center items-center relative z-20'>
                <p className="text-center text-white">&copy; {year} U-Studio Digital. All rights reserved.</p>
            </div>
        </div>
    )
}

