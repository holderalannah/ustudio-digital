'use client'

import { useState, useRef } from 'react';
import Innerpage from "../Components/Layout/Innerpage";
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import DigitalModal from '../Components/DigitalModal';
import Image from "next/image";
import { webDevworks } from '../data/digital-data';

import RightArrow from '../Components/Svgs/RightArrow'

export default function WebWork(){

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (work: any) => {
        setSelectedItem(work);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedItem(null); // Optional: clear data when closed
    };

   const ref = useRef(null);

    const rowVariants = {
        hidden: { opacity: 0 }, 
        visible: {
        opacity: 1, 
        transition: {
            staggerChildren: 0.2,
        }
        }, 
    };

    const cardVariants = {
        init: { 
            opacity: 0, 
            y: 50 
        }, 
        animate: { 
            opacity: 1, 
            y: 0,
        }, 
    };

    const { scrollYProgress } = useScroll({
        target: ref, offset: ["0 1", "1.2 1"], // Trigger animation when card enters viewport
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

    return(
        // rgba(138,34,97,0.65) rgb(207,28,113)
        // rgba(13,131,198,0.65) rgba(7,74,118,0.65) rgb(110,165,68) rgb(22,20,158)
        <Innerpage title="Web Portfolio">
            {selectedItem !== null && (
                <DigitalModal data={webDevworks[selectedItem]} isOpen={isOpen} onClose={closeModal} isWeb={true} />
            )}
            <div ref={ref}>
            <motion.ul  id="portfolio-brands" className="flex gap-5 flex-wrap" 
                style={{ display: "flex", gap: "1rem"}}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible" // Triggers when row enters viewport
                viewport={{  amount: 0.05, once: true }}
            >
                {webDevworks.map((work, index) => 
                    <motion.li key={work.projectTitle} className="w-full md:w-[31.4%] relative shadow-xl rounded-3xl bg-transparent xl:w-[23.7%] group/item card h-[381px]" variants={cardVariants} initial="init" whileInView="animate" viewport={{  amount: 0.25, once: true }} transition={{ type: "spring", bounce: 0.4}}>
                         <button onClick={() => openModal(index)} className="cursor-pointer transition-all group-hover/item:underline w-full h-full text-white">
                        {/* <Link className="transition-all no-underline! hover:text-white group-hover/item:no-underline " href={work.projectUrl}> group-hover/item:bg-[rgba(22,20,158,0.65)] */}
                            
                            <div className="transition-all w-full h-full absolute top-0 left-0  rounded-3xl z-10"></div>

                            <div className="relative w-full h-full overflow-hidden card_content-container">
                                <div className="relative  ">
                                    <Image src={work.projectImg} alt={work.projectTitle} className='rounded-3xl shadow-2xl absolute top-0 left-auto right-auto m-auto' />
                                </div>
                                <div className="py-5 px-4 z-20 text-left absolute bottom-0">
                                    <p className="text-sm leading-5 font-bold word">{work.projectBrand} {work.projectYear}</p>
                                    <p className="text-lg leading-normal font-bold word">{work.projectTitle}</p>

                                    <div className="pt-5">
                                        <a onClick={(e)=> e.preventDefault()} className="cursor-pointer transition-all group-hover/item:underline"><span className="flex gap-2 items-center font-medium word">More Info <RightArrow className='fill-transparent w-5 group-hover/item:fill-white' /></span></a>
                                    </div>
                                </div>

                            </div>
                        {/* </Link> */}
                        </button>
                    </motion.li>
                )}
            </motion.ul>
            </div>
        </Innerpage>
    )
}