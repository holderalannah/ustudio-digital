'use client'

import { useState } from 'react';
import Innerpage from "../Components/Layout/Innerpage";
import CampaignModal from '../Components/CampaignModal';
import Image from "next/image";
import Link from "next/link";
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

    return(
        // rgba(138,34,97,0.65) rgb(207,28,113)
        // rgba(13,131,198,0.65) rgba(7,74,118,0.65) rgb(110,165,68) rgb(22,20,158)
        <Innerpage title="Web Portfolio">
            {selectedItem !== null && (
                <CampaignModal data={webDevworks[selectedItem]} isOpen={isOpen} onClose={closeModal} isWeb={true} />
            )}
            <ul id="portfolio-brands" className="flex gap-5 flex-wrap">
                {webDevworks.map((work, index) => 
                    <li key={work.projectTitle} className="w-full md:w-[31.4%] relative shadow-xl rounded-3xl bg-white xl:w-[23.7%] group/item">
                         <button onClick={() => openModal(index)} className="cursor-pointer transition-all group-hover/item:underline w-full h-full hover:text-white">
                        {/* <Link className="transition-all no-underline! hover:text-white group-hover/item:no-underline " href={work.projectUrl}> */}
                            
                            <div className="transition-all w-full h-full absolute top-0 left-0 group-hover/item:bg-[rgba(22,20,158,0.65)] rounded-3xl z-10"></div>

                            <div className=" ">
                                <div className="relative h-[250px] w-full overflow-hidden">
                                    <Image src={work.projectImg} alt={work.projectTitle} className='rounded-3xl shadow-2xl absolute top-0 left-auto right-auto m-auto' />
                                </div>
                                <div className="py-5 px-4 relative z-20 text-left">
                                    <p className="text-sm leading-5 font-bold">{work.projectBrand} {work.projectYear}</p>
                                    <p className="text-lg leading-normal font-bold">{work.projectTitle}</p>

                                    <div className="pt-5">
                                        <button className="cursor-pointer transition-all group-hover/item:underline"><span className="flex gap-2 items-center font-medium">More Info <RightArrow className='fill-black w-5 group-hover/item:fill-white' /></span></button>
                                    </div>
                                </div>

                            </div>
                        {/* </Link> */}
                        </button>
                    </li>
                )}
            </ul>
        </Innerpage>
    )
}