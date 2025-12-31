"use client"

import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import WebCard from './WebCard';
import CampaignCard from './CampaignCard'

export default function FeatureCards({title, cardInfo, campaign, sliderNumber}){

  
    return(
        <section className='my-10 lg:my-10'>
             <h2 className='leading-[1.45] flex flex-col font-medium justify-center text-[36px] text-black text-left mb-5 tracking-[-0.18px]'>{title}</h2>

            <Swiper className=''
                modules={[ Navigation, Pagination, A11y, EffectFade ]}
                spaceBetween={50}
                navigation
                pagination={{ clickable: true }}
                slidesPerView={sliderNumber}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                effect="fade"
            >
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