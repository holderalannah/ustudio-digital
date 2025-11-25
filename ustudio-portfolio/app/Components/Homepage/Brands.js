import Image from 'next/image';
import Link from 'next/link';
import AxeLogo from '../../../public/images/logos/circle-axe.png';
import DegreeLogo from '../../../public/images/logos/circle-degree.png';
import DMCLogo from '../../../public/images/logos/circle-dmc.png';
import DoveLogo from '../../../public/images/logos/circle-dove.png';
import HellmannsLogo from '../../../public/images/logos/circle-hellmanns.png';
import KnorrLogo from '../../../public/images/logos/circle-knorr.png';
import TresemmeLogo from '../../../public/images/logos/circle-tresemme.png';

export default function Brands(){

    const brandList = [
        {
            brandName: "Axe",
            brandImg: AxeLogo,
            brandUrl: "/",
        },
        {
            brandName: "Degree",
            brandImg: DegreeLogo,
            brandUrl: "/",
        },
        {
            brandName: "Dove",
            brandImg: DoveLogo,
            brandUrl: "/",
        },
        {
            brandName: "Dove Men+Care",
            brandImg: DMCLogo,
            brandUrl: "/",
        },
         {
            brandName: "Hellmanns",
            brandImg: HellmannsLogo,
            brandUrl: "/",
        },
        {
            brandName: "Knorr",
            brandImg: KnorrLogo,
            brandUrl: "/",
        },
        {
            brandName: "Tresemme",
            brandImg: TresemmeLogo,
            brandUrl: "/",
        }
    ];

    return(
        <div className='py-5 md::py-10 lg:py-20'>
            <h2 className='leading-[1.45] flex flex-col font-medium justify-center text-[36px] text-black text-center tracking-[-0.18px]'>View By Brand</h2>
            <div className='size-full'>
                <ul className=' flex gap-4 mt-4.5'>
                    {brandList.map(brand => {
                        return <Link className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115' key={brand.brandName} href={brand.brandUrl}><Image src={brand.brandImg} alt={brand.brandName} width={190} height={190} /></Link>
                    })}
                </ul>

            </div>
        </div>
    )
}