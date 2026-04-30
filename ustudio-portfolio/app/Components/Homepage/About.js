'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { h2Styles } from '../../lib/styles';
import AboutBox from './AboutBox';

import People from '../Svgs/People';
import Build from '../Svgs/Build';
import Marketing from '../Svgs/Marketing';
import QRCode from '../Svgs/QRCode';
import SocialMedia from '../Svgs/SocialMedia';

export default function About() {


    const aboutRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ['center end', 'end center'],
    });

    const translateY = useTransform(scrollYProgress, [0, 0.25], [60, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.20, 0.55], [0, 0.75, 1]);

    const aboutUStudio = [
        {
            itemHeading: "Oat cake chocolate cake",
            itemSvg: <People className='fill-white' />,
            itemText: "Candy canes tart toffee sugar plum cookie macaroon apple pie.",
        },
        {
            itemHeading: "Oat cake chocolate cake",
            itemSvg: <Build className='fill-white ' />,
            itemText: "Candy canes tart toffee sugar plum cookie macaroon apple pie.",
        },
        {
            itemHeading: "Oat cake chocolate cake",
            itemSvg: <Marketing className='fill-white' />,
            itemText: "Candy canes tart toffee sugar plum cookie macaroon apple pie.",
        },
        {
            itemHeading: "Oat cake chocolate cake",
            itemSvg: <QRCode className='fill-white' />,
            itemText: "Candy canes tart toffee sugar plum cookie macaroon apple pie.",
        },
        {
            itemHeading: "Oat cake chocolate cake",
            itemSvg: <People className='fill-white' />,
            itemText: "Candy canes tart toffee sugar plum cookie macaroon apple pie.",
        },
        {
            itemHeading: "Oat cake chocolate cake",
            itemSvg: <SocialMedia className='fill-white' />,
            itemText: "Candy canes tart toffee sugar plum cookie macaroon apple pie.",
        }

    ];

    return (
        <div ref={aboutRef} className='relative px-5 py-12 sm:px-6 lg:px-8 lg:py-16'>
            <motion.div style={{ opacity, translateY }}>
                <h2 className={h2Styles}>Meet U-Studio</h2>
                <div className='size-full mt-7 md:mt-[3.4rem] mx-auto max-w-[1120px]'>
                    <div style={{ ['--marquee-duration']: '28s', ['--marquee-gap']: '1rem' }}>

                        <div className='grid grid-cols-1 md:grid-cols-3'>
                            {aboutUStudio.map((item, i) => <AboutBox key={`key-item-${item.itemText}-${i}`} imgIcon={item.itemSvg} heading={item.itemHeading} content={item.itemText} />)}
                        </div>
                        
                        <div className='pt-10 hidden'>
                            <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[685px]'>At U-Studio, creativity begins with you. As a full-service creative studio, we specialize in bringing your vision to life through thoughtful design, storytelling, and innovative solutions. Our work spans branding, design, and motion, blending strategy with artistry to create meaningful connections between you and your audience. Whether you're building a brand, launching a campaign, or reimagining your identity, we tailor every detail to reflect your unique story and&nbsp;goals.</p>

                            <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[685px]'>At U-Studip, it's more than creativity—it's connection. Everything we do is inspired by&nbsp;you.</p>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}