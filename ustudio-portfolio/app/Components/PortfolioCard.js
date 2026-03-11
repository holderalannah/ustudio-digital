import Image from "next/image";
import RightArrow from '../Components/Svgs/RightArrow'

export default function PortfolioCard({ data, onClick }) {
    return (
        <button onClick={onClick} className="cursor-pointer transition-all group-hover/item:underline w-full h-full text-white">
            <div className="transition-all w-full h-full absolute top-0 left-0 z-10"></div>

            <div className="relative w-full h-full overflow-hidden card_content-container">
                <div className="relative">
                    <Image src={data.projectImg} alt={data.projectTitle} className='shadow-2xl absolute top-0 left-auto right-auto m-auto' />
                </div>
                <div className="py-5 px-4 z-20 text-left absolute bottom-0">
                    <p className="text-sm leading-5 font-bold word">{data.projectBrand} {data.projectYear}</p>
                    <p className="text-lg leading-normal font-bold word">{data.projectTitle}</p>

                    <div className="pt-5">
                        <a onClick={(e) => e.preventDefault()} className="cursor-pointer transition-all group-hover/item:underline"><span className="flex gap-2 items-center font-medium word">More Info <RightArrow className='fill-transparent w-5 group-hover/item:fill-white' /></span></a>
                    </div>
                </div>
            </div>
        </button>
    )
}