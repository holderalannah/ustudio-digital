import {useState} from 'react'
import Modal from "./Modal"
import Link from "next/link"
import Image from "next/image";
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, FreeMode, Thumbs, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

function CampaignSection({children, heading}){
    return(
        <div className="mb-5">
            <h3 className="font-bold text-lg">{heading}</h3>
            <p className="text-sm md:text-base">{children}</p>
        </div>
    )
}

export default function AiModal({data, isOpen, onClose }){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
       <Modal isOpen={isOpen} onClose={onClose} addedStyles={'overflow-auto h-[95vh] md:overflow-hidden md:h-[865px] lg:h-[80vh] flex flex-col justify-center items-center'}>
            {/* <h2 className="font-extrabold text-2xl lg:text-3xl">{data.projectTitle}</h2> */}


            <div className={`flex w-full justify-between items-start flex-col h-[87%] flex-wrap overflow-auto overflow-x-hidden md:h-[89%] lg:flex-row lg:h-[80%] lg:overflow-auto lg:justify-center lg:items-center lg:mb-7`}>
                {data.projectBriefing && (
                <div className="w-full h-[52%] overflow-auto md:pr-1.5 md:h-[65%] md:w-[47%] lg:pr-0 lg:h-full lg:w-[30%] lg:overflow-auto">
                    <CampaignSection heading="U-Studio">
                        <p>Toronto, Ontario, <strong>Canada</strong></p>
                    </CampaignSection>

                    <CampaignSection heading="Business Group">
                       {data.projectBusinessGroup}
                    </CampaignSection>

                    <CampaignSection heading="Category">
                        {data.projectCategory}
                    </CampaignSection>

                    <CampaignSection heading="Brand">
                        {data.projectBrand}
                    </CampaignSection>
                    
                    {data.projectBriefing && (
                        <CampaignSection heading="Briefing">
                        {data.projectBriefing}
                        </CampaignSection>
                    )}
                    
                    {data.projectSolution && (
                        <CampaignSection heading="Solution">
                            {data.projectSolution}
                        </CampaignSection>
                    )}

                    { data.projectPlatform &&
                        <CampaignSection heading="Platforms">
                        {data.projectPlatform}
                        </CampaignSection>
                    }

                </div>
)}
                <div id="ai-modal-container" className="w-full justify-center items-center flex flex-col h-full lg:items-baseline lg:overflow-hidden">
                    
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#000',
                            '--swiper-pagination-color': '#000',
                        }}
                        spaceBetween={5}
                        navigation={true}
                        pagination={{clickable: true}}
                        keyboard={{enabled: true }}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Pagination, FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 w-full flex items-center justify-center"
                    >
                        {data.projectImg.map((projectSlide, i) => (
                            <SwiperSlide>
                                <div className='h-full flex flex-col items-center justify-center'>
                                    <Image src={projectSlide} alt={data.projectTitle} className='w-full' />
                                </div>
                            </SwiperSlide>
                    ))}
                        
                    </Swiper>
                </div>
            </div>

            { data.projectUrl &&
                <Link href={data.projectUrl} target='_blank' className="font-bold py-2.5 px-3 bg-darkPurple rounded-2xl text-white text-sm hover:bg-darkPink">View</Link>
            }

        </Modal>
    )
};