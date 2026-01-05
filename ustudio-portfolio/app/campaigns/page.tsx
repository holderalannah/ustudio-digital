import Innerpage from "../Components/Layout/Innerpage";
import Image from "next/image";
import Link from "next/link";

import DoveEA from '../../public/images/campaigns/project-campaign-dmc-ea.png'
import AxeGold from '../../public/images/campaigns/project-campaign-axe-golden-ticket.png'
import TresOff from '../../public/images/campaigns/project-campaign-tresemme-conair.png'
import DoveWal from '../../public/images/campaigns/project-campaign-dove-walmart-offer.png'
import DoveHair from '../../public/images/campaigns/project-campaign-dove-hair-contest.png'
import UniMenScale from '../../public/images/campaigns/project-campaign-unilever-mens-scale-vip.png'
import UniTeamFresh from '../../public/images/campaigns/project-campaign-unilever-jointeamfresh.png'
import AxeRaptors from '../../public/images/campaigns/project-campaign-axe-toronto-raptors.png'
import KnorrLunar from '../../public/images/campaigns/project-campaign-knorr-chinese-ny.png'
import SheaBodyGlow from '../../public/images/campaigns/project-campaign-lux-bodyglow.png'
import UniThanks from '../../public/images/campaigns/project-campaign-unilever-thanksandgiving.png'


import RightArrow from '../Components/Svgs/RightArrow'

export default function EmailCampaigns(){

    const works = [
        {
            projectYear: "2025",
            projectBrand: "Dove Men+Care",
            projectTitle: "Dove EA Sports",
            projectImg: DoveEA,
            projectUrl: "https://unileverpromos-ca.wyng.com/dovemenplaysfc",
        },
        {
            projectYear: "2025",
            projectBrand: "Axe",
            projectTitle: "Axe Golden Ticked",
            projectImg: AxeGold,
            projectUrl: "/",
        },
        {
            projectYear: "2025",
            projectBrand: "Tresemme",
            projectTitle: "Tresemme X Conair",
            projectImg: TresOff,
            projectUrl: "https://unileverpromos-ca.wyng.com/tresemmeoffer",
        },
        {
            projectYear: "2025",
            projectBrand: "Dove",
            projectTitle: "Dove + Walmart",
            projectImg: DoveWal,
            projectUrl: "https://unileverpromos-ca.wyng.com/doveoffer/preview",
        },
         {
            projectYear: "2025",
            projectBrand: "Unilever Brand Range",
            projectTitle: "Thanks & Giving Giveaway",
            projectImg: UniThanks,
            projectUrl: "https://unileverpromos-ca.wyng.com/thanksgiving-giveaway/preview?eulid=[dummy]&audience=NW",
        },
        {
            projectYear: "2025",
            projectBrand: "Unilever Brand Range",
            projectTitle: "Join Team Fresh",
            projectImg: UniTeamFresh,
            projectUrl: "https://unileverpromos-ca.wyng.com/jointeamfresh/preview",
        },
        {
            projectYear: "2025",
            projectBrand: "Dove",
            projectTitle: "Dove Hair Contest",
            projectImg: DoveHair,
            projectUrl: "https://unileverpromos-ca.wyng.com/DoveHairContest/preview",
        },
        {
            projectYear: "2025",
            projectBrand: "Unilever Brand Range",
            projectTitle: "Men's Scale VIP",
            projectImg: UniMenScale,
            projectUrl: "https://unileverpromos-ca.wyng.com/raptorsVIPsuiteEN/preview",
        },
        {
            projectYear: "2025",
            projectBrand: "Axe",
            projectTitle: "Toronto Raptors X Axe",
            projectImg: AxeRaptors,
            projectUrl: "https://unileverpromos-ca.wyng.com/TorontoRaptorsAXEContest/preview",
        },
        {
            projectYear: "2025",
            projectBrand: "Knorr",
            projectTitle: "Knorr Lunar New Year",
            projectImg: KnorrLunar,
            projectUrl: "https://unileverpromos-ca.wyng.com/lny2025en/preview",
        },
           {
            projectYear: "2025",
            projectBrand: "SheaMoisture",
            projectTitle: "Luxury Body Glow",
            projectImg: SheaBodyGlow,
            projectUrl: "https://sheamoisture.wyng.com/SplendidBW/preview",
        },
        
    ];

    return(
        <Innerpage title="Campaign Portfolio">
            <ul id="portfolio-brands" className="flex gap-5 flex-wrap">
                {works.map((work) => 
                    <li key={work.projectTitle} className="w-[23%] max-w-[225px] relative shadow-xl rounded-3xl bg-white group/item">
                        <Link target="_blank" className="transition-all no-underline! hover:text-white group-hover/item:no-underline " href={work.projectUrl}>
                            
                            <div className="transition-all w-full h-full absolute top-0 left-0 group-hover/item:bg-[rgba(22,20,158,0.65)] rounded-3xl z-10"></div>

                            <div className=" ">
                                <div className="relative h-[340px] w-full rounded-t-3xl overflow-hidden">
                                    <Image src={work.projectImg} alt={work.projectTitle} className='-mt-5 shadow-2xl absolute top-0 left-auto right-auto m-auto' />
                                </div>
                                <div className="py-5 px-4 relative z-20">
                                    <p className="text-sm leading-5 font-bold">{work.projectBrand} {work.projectYear}</p>
                                    <p className="text-[17px] leading-normal font-bold">{work.projectTitle}</p>

                                    <div className="pt-5">
                                        <Link href={work.projectUrl} className="transition-all group-hover/item:underline"><span className="flex gap-2 items-center font-medium">View Website <RightArrow className='fill-black w-5 group-hover/item:fill-darkPink' /></span></Link>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </li>
                )}
            </ul>
        </Innerpage>
    )
}




