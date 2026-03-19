'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { h2Styles } from '../../lib/styles';


export default function About() {


    const aboutRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: aboutRef,
        offset: ['center end', 'end center'],
    });

    const translateY = useTransform(scrollYProgress, [0, 0.25], [60, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.55], [0, 0.65, 1]);

    return (
        <div ref={aboutRef} className='py-5 overflow-hidden md:py-10 lg:pt-[82px] lg:pb-2.5'>
            <motion.div style={{ opacity, translateY }}>
                <h2 className={h2Styles}>Meet Your In-House Agency</h2>
                <div className='size-full mt-7 md:mt-[3.4rem]' >
                    <div style={{ ['--marquee-duration']: '28s', ['--marquee-gap']: '1rem' }}>
                        <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[685px]'>At U-Studio, creativity begins with you. As a full-service creative studio, we specialize in bringing your vision to life through thoughtful design, storytelling, and innovative solutions. Our work spans branding, design, and motion, blending strategy with artistry to create meaningful connections between you and your audience. Whether you're building a brand, launching a campaign, or reimagining your identity, we tailor every detail to reflect your unique story and&nbsp;goals.</p>

                        <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[685px]'>At U-Studip, it's more than creativity—it's connection. Everything we do is inspired by&nbsp;you.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}