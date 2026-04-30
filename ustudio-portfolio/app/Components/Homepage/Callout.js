'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Callout({children}){
    const calloutRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: calloutRef,
        offset: ['center end', 'end center'],
    });

    const translateY = useTransform(scrollYProgress, [0, 0.25], [60, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.20, 0.55], [0, 0.75, 1]);

    return(
        <section ref={calloutRef} className="mt-10 lg:mt-14">
            <motion.div style={{ opacity, translateY }}>
                <div className='flex flex-col text-center items-center justify-center rounded-2xl border border-unilever/20 bg-unilever/10 py-8 px-7 mx-auto max-w-[1024px] border border-unilever rounded-2xl md:px-16 md:py-14 lg:px-20'>
                    {children}
                </div>
            </motion.div>
        </section>
    )
}