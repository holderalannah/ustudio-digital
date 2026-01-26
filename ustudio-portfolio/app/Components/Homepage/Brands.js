import Image from 'next/image';
import Link from 'next/link';
import AxeLogo from '../../../public/images/logos/circle-axe.png';
import DegreeLogo from '../../../public/images/logos/circle-degree.png';
import DMCLogo from '../../../public/images/logos/circle-dmc.png';
import DoveLogo from '../../../public/images/logos/circle-dove.png';
import HellmannsLogo from '../../../public/images/logos/circle-hellmanns.png';
import KnorrLogo from '../../../public/images/logos/circle-knorr.png';
import SheaMoistureLogo from '../../../public/images/logos/circle-sheaMoisture.png';
import TresemmeLogo from '../../../public/images/logos/circle-tresemme.png';
import VaselineLogo from '../../../public/images/logos/circle-tresemme.png';

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

    return(
        <div className='py-5 md:py-10 lg:pb-20 lg:pt-16'>
            <h2 className='leading-[1.45] flex flex-col font-medium justify-center text-[36px] text-black text-center tracking-[-0.18px]'>View By Brand</h2>
            <div className='size-full'>
                <ul className='flex flex-wrap justify-center gap-4 mt-4.5 xl:flex-nowrap'>
                    {brandList.map(brand => {
                        return <Link target='_blank' className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115' key={brand.brandName} href={brand.brandUrl}><Image src={brand.brandImg} alt={brand.brandName} width={190} height={190} /></Link>
                    })}
                </ul>

            </div>
        </div>
    )
}