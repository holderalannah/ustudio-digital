import Cta from '../Components/Cta';
import Image from 'next/image';
import UstudioDovePromo from '../../public/images/ustudio-dove-hair-promo.jpg';

export default function CenteredCallout(){
    return(
        <div className="bg-darkPurple py-16 text-white text-center w-full lg:py-28 relative overflow-hidden">
            <Image src={UstudioDovePromo} alt="ustudio fove hair promotion" className='object-cover opacity-20 absolute z-10 top-0 left-0 right-0 bottom-0 m-auto' />
         <div className='relative z-20'>
               <h3 className='text-[32px] mx-auto max-w-[310px] font-normal leading-[0.9] relative size-full text-center text-white tracking-[-1.8px] mb-5 lg:mb-10 lg:text-[60px] lg:max-w-[620px]'>Ready to create something unmissable?</h3>
            <p className='text-lg mb-5 lg:mb-10'>Reach out to U-Studio Toronto <a className='font-bold' href="ustudiotoronto@ustudio.global">here</a>.</p>
            <Cta text="Learn More" url="/about-us" />
         </div>
        </div>
    )
}

