'use client'

import { useState } from 'react';
import Innerpage from "../Components/Layout/Innerpage";
import Container from "../Components/Container";
import CampaignModal from '../Components/CampaignModal';
import PinCard from "../Components/PinCard";
import { socialsData } from "../data/social-data";
import RightArrow from '../Components/Svgs/RightArrow'
import Image from "next/image";

export default function Socials(){

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
        <Innerpage title="Socials">
            {selectedItem !== null && (
                <CampaignModal data={socialsData[selectedItem]} isOpen={isOpen} onClose={closeModal} />
            )}
            <Container>
                <div className='min-h-[700px]'>
                    <div className="w-full max-w-[1124px] flex gap-5 flex-wrap">
                        {socialsData.map((work,index) => {
                            return <PinCard key={index} small={ !(index * 3 % 2 === 0) && !(index + 8 % 3 === 0) } medium={index % 2 === 0} large={!(index % 2 === 0) && index % 3 === 0}>
                                 <button onClick={() => openModal(index)} className="cursor-pointer transition-all group-hover/item:underline w-full h-full">
                                <Image className='w-full h-full object-cover rounded-2xl shadow-2xl' src={work.projectImg} alt={work.projectTitle} />
                                  <div className="pt-5">
                                       {/* <button onClick={() => openModal(index)} className="cursor-pointer transition-all group-hover/item:underline">
                                            <span className="flex gap-2 items-center font-medium">
                                                More Info<RightArrow className='fill-black w-5 group-hover/item:fill-darkPink' />
                                            </span>
                                        </button> */}
                                    </div>
                                    </button>
                            </PinCard>
                        })}
                    </div>
                </div>
            </Container>
        </Innerpage>
    )
}