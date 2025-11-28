import Link from 'next/link';
import Image from 'next/image';
import svgPaths from "../../public/images/arrow.svg";

function Arrow() {
  return (
    <div className="content-stretch flex gap-2.5 h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-1.5" data-name="↗">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(138, 34, 97, 1)" }}>
            <Image src={svgPaths} alt="arrow" />
        </div>
      </div>
    </div>
  );
}


export default function Cta({text, url}){
    return(
        <Link className='bg-white flex flex-row items-center justify-center w-[90%] max-w-[600px] mx-auto rounded-4xl text-darkPurple transition duration-300 ease-in-out hover:bg-darkPurple hover:text-white hover:underline' href={url}>
            <div className="flex gap-0.5 items-center justify-center px-[22px] py-3.5 relative">
                <p className="font-bold leading-[1.4] relative shrink-0 text-[16px] text-center text-nowrap tracking-[0.4px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {text}
                </p>
            </div>
        </Link>
    )
}