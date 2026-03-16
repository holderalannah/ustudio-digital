'use client';
import { useState } from 'react';
import Image from 'next/image';
import Container from '../Components/Container';
import Modal from '../Components/Modal';
import Innerpage from '../Components/Layout/Innerpage';
import Video from 'next-video';
import studioReel from '/videos/2025_Seezle_Reel_Ustudio.mp4';
import VideoThumbnail from '../../public/images/sizzle-thumbnail.jpg';
import Play from '../Components/Svgs/Play';


export default function AboutUs(){

      const [isOpen, setIsOpen] = useState(false);
    
        function openModal (){
            setIsOpen(true);
        };
    
        function closeModal() {
            setIsOpen(false);
        };
        
    return(
       <Innerpage title="About Us">
        <Modal isOpen={isOpen} onClose={closeModal} addedStyles="[ > button]:lg:right-[17px] flex justify-center items-center">
            <Video src={studioReel} />
        </Modal>
        <Container>
            <div className='min-h-[700px]'>
                <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[885px]'>U-Studio is Unilever's innovative in-house digital marketing and creative agency, established in collaboration with Oliver in 2016. Designed to produce swift and cost-effective content for Unilever's diverse brand portfolio, U-Studio operates across more than 20 global locations. The agency specializes in digital and social content, and has recently expanded its expertise to include AI-driven creations. By leveraging its integrated approach, U-Studio delivers production that is 30% more affordable and faster than traditional external agencies.</p>

                <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[885px]'>As Unilever's globally award-winning in-house agency, we deliver unmissable creative solutions across digital commerce, social, fully integrated campaigns and more. It's why <strong>U-Studio has just been named Campaign's Global In-House Agency of the Year for a third year running.</strong></p>

                <div className='max-w-[750px] mt-6 mb-6 mx-auto lg:mt-8 lg:mb-0'>
                    <button onClick={openModal} className='hover:cursor-pointer relative group/item'>
                        <Image src={VideoThumbnail} alt="U-Studio 2025 Sizzel Reel" />
                        <div className='absolute top-0 bottom-0 right-0 left-0 m-auto z-10 w-[18vw] h-[18vh] md:w-[100px] md:h-[100px]'>
                            <Play className='transition-all w-full h-full fill-white group-hover/item:fill-[#8f2363]' />
                        </div>
                    </button>
                </div>
            </div>
        </Container>
       </Innerpage>
       
    )
}