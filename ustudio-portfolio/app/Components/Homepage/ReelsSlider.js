import Link from 'next/link';
'use client'; // Required for client-side functionality like hooks and event listeners

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import InstagramEmbed from 'react-instagram-embed';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reelsData = [
  { id: 'reel-id-1', url: 'https://www.instagram.com/reel/YOUR_REEL_ID_1/' },
  { id: 'reel-id-2', url: 'https://www.instagram.com/reel/YOUR_REEL_ID_2/' },
  // ... more reels
];


export default function ReelsSlider(){
    return(
         <section className='my-10 lg:my-20'>
             <h2 className='leading-[1.45] flex flex-col font-medium justify-center text-[36px] text-black text-left mb-5 tracking-[-0.18px]'>Our Insta Moments</h2>
  <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {reelsData.map((reel) => (
        <SwiperSlide key={reel.id}>
          <InstagramEmbed
            url={reel.url}
            maxWidth={320}
            hideCaption={false}
            containerTagName='div'
            protocol=''
            injectScript
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          />
        </SwiperSlide>
      ))}
    </Swiper>
        </section>
    )
}