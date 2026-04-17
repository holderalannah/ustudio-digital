'use client';
import Container from '../Container';
import Heading1 from '../Layout/Heading1';
import { motion, useSpring } from 'motion/react';

export default function Innerpage({children, title, fullWidthContainers = false}){

    const variant = {
        initial: {y: 40, opacity: 0},
        animate: (i) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.25,
                type: "spring",
                bounce: 0.4,
            }
        })
    }
return(
    <div className={`mt-[82px] lg:mt-[88px] ${fullWidthContainers === true ? `pb-0` : `pb-5 lg:pb-14`}`}>
        {title && (
            <motion.div className='h-[150px] mb-3 relative flex justify-center items-center text-darkPurple! lg:h-[200px] lg:mb-12'>

                <Heading1>{title.split("").map((letter, i) => (
                    <motion.span key={`${letter}-${i}-headline`} initial="initial" variants={variant} custom={i} whileInView="animate">{letter}</motion.span>
                ))}
                </Heading1>

            </motion.div>
        )}
        { fullWidthContainers ? (
            <section>
                {children}
            </section>
        ) : (
            <Container>
                {children}
            </Container>
        )}
        
    </div>
)
}