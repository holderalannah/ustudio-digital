'use client';
import Container from '../Container';
import Heading from '../Layout/Heading1';
import { motion, useSpring } from 'motion/react';

export default function Innerpage({children, title}){

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
        <div className='pb-5 lg:pb-14 lg:mt-[88px]'>
            <motion.div className='h-[150px] bg-cover bg-center bg-no-repeat bg-header mb-8 relative flex justify-center items-center text-darkPurple! lg:h-[200px] lg:mb-12'>
                <Heading>{title.split("").map((letter, i) => (
                    <motion.span key={`${letter}-${i}-headline`} initial="initial" variants={variant} custom={i} whileInView="animate">{letter}</motion.span>
                ) )}</Heading>
            </motion.div>
            <Container>
                {children}
            </Container>
       </div>
)
}