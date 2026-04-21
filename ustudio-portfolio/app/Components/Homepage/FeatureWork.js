"use client"

import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import RightArrow from '../Svgs/RightArrow';
import Container from '../Container';
import { h2Styles } from '../../lib/styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

import WebCard from './WebCard';
import SocialCard from './SocialCard'
import OohCard from './OohCard'
import Link from 'next/link';

export default function FeatureWork({title, cardInfo, sliderNumber, workType }){

    const swiperBreakpoints = {
        320: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: sliderNumber,
            spaceBetween: 0,
        },
        1540: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
        1920: {
            slidesPerView: 6,
            spaceBetween: 0,
        }
    };

  
    return(
        <section className='my-10 lg:my-10'>
            <Container>
                <h2 className={h2Styles}>{title}</h2>
            </Container>
            <Swiper className='swiper-feature-slider pt-[182px] lg:pt-14!'
                modules={[ Navigation, Pagination, A11y ]}
                spaceBetween={0}
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
                <div tabIndex={0} className='swiper-nav-container absolute gap-4 flex justify-center left-0 right-0 top-0 z-50 lg:left-[initial] lg:justify-normal lg:w-full lg:top-1/2 lg:items-center'>
                    
                    <button onClick={(e)=> e.preventDefault()} className="swiper-nav-btns custom-prev" tabIndex={0} aria-label='Prev'>
                        <RightArrow className='fill-white rotate-180 opacity-100 w-5' />
                    </button>
                    
                    <button onClick={(e)=> e.preventDefault()} className="swiper-nav-btns custom-next" tabIndex={0} aria-label='Next'>
                        <RightArrow className='fill-white opacity-100 w-5' />
                    </button>
                </div>

                {cardInfo.map((card) =>{
                    return(
                        <SwiperSlide>
                            { workType === 'socials' ? (
                                <SocialCard
                                    key={card.cardSocial}
                                    cardSocial={card.cardSocial}
                                />
                            ) : workType === 'ooh' ? (
                                <OohCard />
                            ) : workType === 'dev' ? (
                                <WebCard
                                    key={card.cardProject}
                                    cardImg={card.cardImg}
                                    cardUrl={card.cardUrl}
                                    cardProject={card.cardProject}
                                    cardBrand={card.cardBrand}
                                />
                            ) :
                            <div></div>
                           
                            }
                        </SwiperSlide>
                    )
                })}
                
            </Swiper>
            <div className='m-auto flex justify-center'>
                <Link className='text-center uppercase inline font-bold tracking-wider relative undraw-border-link pb-1.5' href={`/work?type=${workType}`}>View All</Link>
            </div>
        </section>
    )
}