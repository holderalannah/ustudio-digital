"use client"

import Image from 'next/image';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import RightArrow from '../Svgs/RightArrow';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import WebCard from './WebCard';
import CampaignCard from './CampaignCard'

export default function FeatureCards({title, cardInfo, campaign, sliderNumber }){

    const swiperBreakpoints = {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 1024px
        1024: {
            slidesPerView: sliderNumber,
            spaceBetween: 50,
        },
    };

  
    return(
        <section className='my-10 lg:my-10'>
             <h2 className='leading-[1.45] flex flex-col font-medium justify-center text-[36px] text-black text-left mb-0 tracking-[-0.18px]'>{title}</h2>
            <Swiper className='swiper-feature-slider !pt-14'
                modules={[ Navigation, Pagination, A11y ]}
                spaceBetween={50}
                navigation={{ 
                    enabled: true, 
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev' }}
                pagination={{ clickable: true }}
                keyboard={{
                enabled: true,
                }}
                slidesPerView={sliderNumber}
                breakpoints={swiperBreakpoints}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <div className='swiper-nav-container gap-4 flex absolute top-0 right-0'>
                    
                    <button onClick={(e)=> e.preventDefault()} className="swiper-nav-btns custom-prev group-hover/item:opacity-100" aria-label='Prev'>
                        <RightArrow className='fill-white rotate-180 opacity-100 w-5 group-hover/item:opacity-100' />
                    </button>
                    
                    <button onClick={(e)=> e.preventDefault()} className="swiper-nav-btns custom-next group-hover/item:opacity-100" aria-label='Next'>
                        <RightArrow className='fill-white opacity-100 w-5 group-hover/item:opacity-100' />
                    </button>
                </div>

                {cardInfo.map((card) =>{
                    return(
                        <SwiperSlide>
                            {campaign ?

                                <CampaignCard key={card.cardProject}
                                    cardImg={card.cardImg} cardUrl={card.cardUrl} cardProject={card.cardProject} cardBrand={card.cardBrand}
                                />
                                : <WebCard key={card.cardProject}
                                    cardImg={card.cardImg} cardUrl={card.cardUrl} cardProject={card.cardProject} cardBrand={card.cardBrand}
                                />}
                 
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
        </section>
    )
}