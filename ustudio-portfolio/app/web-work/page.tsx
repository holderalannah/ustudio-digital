import Innerpage from "../Components/Layout/Innerpage";
import Image from "next/image";
import Link from "next/link";

import DoveChange from '../../public/images/digital/project-dove-change-compliment-screenshot.png'
import DoveWhy from '../../public/images/digital/project-dove-why2k-screenshot.png'
import KnorrPastes from '../../public/images/digital/project-knorr-pastes-screenshot.png'

import RightArrow from '../Components/Svgs/RightArrow'

export default function WebWork(){

    const works = [
        {
            projectYear: "2025",
            projectBrand: "Dove",
            projectTitle: "Change the Compliment",
            projectImg: DoveChange,
            projectUrl: "/",
        },
        {
            projectYear: "2025",
            projectBrand: "Dove",
            projectTitle: "Why2k",
            projectImg: DoveWhy,
            projectUrl: "/",
        },
        {
            projectYear: "2025",
            projectBrand: "Knorr",
            projectTitle: "Knorr Premium Paastes",
            projectImg: KnorrPastes,
            projectUrl: "/",
        },
    ];

    return(
        // rgba(138,34,97,0.65) rgb(207,28,113)
        // rgba(13,131,198,0.65) rgba(7,74,118,0.65) rgb(110,165,68) rgb(22,20,158)
        <Innerpage title="Web Portfolio">
            <ul id="portfolio-brands" className="flex gap-5">
                {works.map((work) => 
                    <li key={work.projectTitle} className="w-1/3 relative shadow-xl rounded-3xl bg-white group/item">
                        <Link className="transition-all no-underline! hover:text-white group-hover/item:no-underline " href={work.projectUrl}>
                            
                            <div className="transition-all w-full h-full absolute top-0 left-0 group-hover/item:bg-[rgba(22,20,158,0.85)] rounded-3xl z-10"></div>

                            <div className=" ">
                                <div className="relative h-[250px] w-full overflow-hidden">
                                    <Image src={work.projectImg} alt={work.projectTitle} className='rounded-3xl shadow-2xl absolute top-0 left-auto right-auto m-auto' />
                                </div>
                                <div className="py-5 px-4 relative z-20">
                                    <p className="text-sm leading-5 font-bold">{work.projectBrand} {work.projectYear}</p>
                                    <p className="text-lg leading-normal font-bold">{work.projectTitle}</p>

                                    <div className="pt-5">
                                        <Link href={work.projectUrl} className="transition-all group-hover/item:underline"><span className="flex gap-2 items-center font-medium">View Website <RightArrow className='fill-black w-5 group-hover/item:fill-white' /></span></Link>
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