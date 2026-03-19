'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { h2Styles } from '../../lib/styles';
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


export default function Brands() {

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

    const translateY = useTransform(scrollYProgress, [0, 0.25], [60, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.25, 0.55], [0, 0.65, 1]);

    return (
        <div ref={brandRef} className='py-5 overflow-hidden md:py-10 lg:pt-10 lg:pb-[105px]'>
            <motion.div style={{ opacity, translateY }}>
                <h2 className={h2Styles}>Brands We Work With</h2>
                <div className='size-full mt-7 md:mt-[3.4rem]' >
                    <div style={{ ['--marquee-duration']: '28s', ['--marquee-gap']: '1rem' }}>
                        <BrandCard data={brandList} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}