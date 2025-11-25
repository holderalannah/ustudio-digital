"use client"

import { SwiperSlide, Swiper } from 'swiper/react';
import WebCard from './WebCard';

export default function FeatureCards({title, cardInfo}){
  
    return(
        <section className='my-10 lg:my-20'>
             <h2 className='leading-[1.45] flex flex-col font-medium justify-center text-[36px] text-black text-left mb-5 tracking-[-0.18px]'>{title}</h2>

            <Swiper className=''
                spaceBetween={50}
                slidesPerView={cardInfo.length - 1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {cardInfo.map((card) =>{
                    return(
                        <SwiperSlide>
                            <WebCard key={Math.random()}
                            cardImg={card.cardImg} cardUrl={card.cardUrl} cardProject={card.cardProject} cardBrand={card.cardBrand}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}