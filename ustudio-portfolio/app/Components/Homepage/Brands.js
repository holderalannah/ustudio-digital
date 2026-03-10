'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import BrandCard from './BrandCard';
import AxeLogo from '../../../public/images/logos/axe-logo.png';
import DegreeLogo from '../../../public/images/logos/degree-logo.png';
import DMCLogo from '../../../public/images/logos/dove-men-logo.png';
import DoveLogo from '../../../public/images/logos/dove-logo.png';
import HellmannsLogo from '../../../public/images/logos/hellmanns-logo.png';
import KnorrLogo from '../../../public/images/logos/knorr-logo.png';
import SheaMoistureLogo from '../../../public/images/logos/sheaMoisture-logo.png';
import TresemmeLogo from '../../../public/images/logos/tresemme-logo.png';
import VaselineLogo from '../../../public/images/logos/vaseline-logo.png';

export default function Brands(){

    const brandList = [
        {
            brandName: "Axe",
            brandImg: AxeLogo,
            brandUrl: "https://www.axe.com/ca/en/home.html",
        },
        {
            brandName: "Degree",
            brandImg: DegreeLogo,
            brandUrl: "https://www.degreedeodorant.com/ca/en/home.html",
        },
        {
            brandName: "Dove",
            brandImg: DoveLogo,
            brandUrl: "https://www.dove.com/ca/en/home.html",
        },
        {
            brandName: "Dove Men+Care",
            brandImg: DMCLogo,
            brandUrl: "https://www.dove.com/ca/en/men-care.html",
        },
         {
            brandName: "Hellmanns",
            brandImg: HellmannsLogo,
            brandUrl: "https://www.hellmanns.com/ca/en/home.html",
        },
        {
            brandName: "Knorr",
            brandImg: KnorrLogo,
            brandUrl: "https://www.knorr.com/ca/en/home.html",
        },
        {
            brandName: "SheaMoisture",
            brandImg: SheaMoistureLogo,
            brandUrl: "https://www.sheamoisture.com/ca/en/home.html",
        },
        {
            brandName: "Tresemme",
            brandImg: TresemmeLogo,
            brandUrl: "https://www.tresemme.com/ca/en/home.html",
        },
         {
            brandName: "Vaseline",
            brandImg: VaselineLogo,
            brandUrl: "https://www.vaseline.com/ca/en/home.html",
        }
    ];

    const brandRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: brandRef,
        offset: ['center end', 'end center'],
    });

    const translateY = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
	const opacity = useTransform(scrollYProgress, [0, 0.5, 0.95], [0, 0.65, 1]);

    return(
        <div ref={brandRef} className='py-5 overflow-hidden md:py-10 lg:pb-20 lg:pt-16'>
            <h2 className='leading-[1.45] flex flex-col font-medium justify-center text-[36px] text-black text-center tracking-[-0.18px]'>Brands We Work With</h2>
            <div className='size-full'>
                <BrandCard data={brandList} />
                {/* <ul className='flex flex-wrap justify-center gap-4 mt-4.5 xl:flex-nowrap'>
                    {brandList.map((brand, index) => {
                        return (
                            <motion.div key={brand.brandName} style={{ translateY, opacity }} transition={{
									ease: 'linear',
									duration: 1,
								}}>
                                <Link target='_blank' className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115'  href={brand.brandUrl}><Image src={brand.brandImg} alt={brand.brandName} width={190} height={190} /></Link>
                            </motion.div>
                        )
                    })}
                </ul> */}

            </div>
        </div>
    )
}