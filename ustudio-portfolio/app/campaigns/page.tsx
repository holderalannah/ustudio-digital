'use client'

import Innerpage from "../Components/Layout/Innerpage";
import Image from "next/image";
import Link from "next/link";
import CampaignModal from '../Components/CampaignModal';
import Modal from "../Components/Modal";
import { campaigns } from '../data/campaign-data';
import { useState } from "react";

import RightArrow from '../Components/Svgs/RightArrow'

export default function EmailCampaigns() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (work) => {
        setSelectedItem(work);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedItem(null); // Optional: clear data when closed
    };

    return(
        <Innerpage title="Campaign Portfolio">
             {selectedItem !== null && (
                <CampaignModal data={campaigns[selectedItem]} isOpen={isOpen} onClose={closeModal} />
            )}
            <ul id="portfolio-brands" className="flex gap-5 flex-wrap">
                {campaigns.map((work, index) => 
                    <li key={work.projectTitle} className="w-[23%] max-w-[225px] relative shadow-xl rounded-3xl bg-white group/item mb-5">
                        <button onClick={() => openModal(index)} className="transition-all no-underline! hover:text-white group-hover/item:no-underline w-full">
                            
                            <div className="transition-all w-full h-full absolute top-0 left-0 group-hover/item:bg-[rgba(22,20,158,0.65)] rounded-3xl z-10"></div>

                            <div className=" ">
                                <div className="relative h-[340px] w-full rounded-t-3xl overflow-hidden">
                                    <Image src={work.projectImg} alt={work.projectTitle} className='-mt-5 shadow-2xl absolute top-0 left-auto right-auto m-auto' />
                                </div>
                                <div className="py-5 px-4 relative z-20">
                                    <p className="text-sm leading-5 font-bold">{work.projectBrand} {work.projectYear}</p>
                                    <p className="text-[17px] leading-normal font-bold">{work.projectTitle}</p>

                                    <div className="pt-5">
                                        <button className="transition-all group-hover/item:underline">
                                            <span className="flex gap-2 items-center font-medium">
                                                More Info<RightArrow className='fill-black w-5 group-hover/item:fill-darkPink' />
                                            </span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </button>
                    </li>
                )}
            </ul>
        </Innerpage>
    )
}




