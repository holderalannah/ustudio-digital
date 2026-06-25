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
            itemHeading: "Integrated Model",
            itemSvg: <People className='fill-white' />,
            itemText: "Combines the strengths of both external and in-house agency capabilities",
        },
        {
            itemHeading: "Adaptability and Innovation",
            itemSvg: <Marketing className='fill-white' />,
            itemText: "It is a dedicated creative studio specifically built in partnership with Unilever to serve their marketing needs",
        },
        {
            itemHeading: <>Award&#8209;Winning&nbsp;Recognition</>,
            itemSvg: <Build className='fill-white ' />,
            itemText: "Has achieved global recognition, repeatedly being named Campaign's global In-House Agency of the Year, highlighting its effectiveness and creative output",
        },
        {
            itemHeading: "Agile and Responsive Operations",
            itemSvg: <People className='fill-white' />,
            itemText: "Known for its ability to provide quick responsiveness, adaptable solutions, and efficient creative execution for Unilever's diverse brands",
        },
        {
            itemHeading: "Extensive Growth and Reach",
            itemSvg: <QRCode className='fill-white' />,
            itemText: "U-Studio, in partnership with Oliver, has expanded considerably, now employing over 500 people across numerous studios in various countries",
        },
        {
            itemHeading: "Pioneer in AI Integration",
            itemSvg: <SocialMedia className='fill-white' />,
            itemText: "Actively integrates advanced AI capabilities into its workflow, including the development and utilization of proprietary Generative AI tools like Pencil Pro",
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
                            <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[685px]'>U-Studio Toronto is an in-house creative studio, a collaborative effort between Unilever and Oliver Agency. Oliver Agency specializes in establishing and managing bespoke in-house agencies for brands, effectively blending external agency expertise with the benefits of being closely integrated with the client.</p>

                            <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[685px]'>At U-Studip, it's more than creativity—it's connection. Everything we do is inspired by&nbsp;you.</p>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}