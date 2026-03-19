import Link from 'next/link';

export default function Cta({text, url}){
    return(
        <Link className='bg-white flex flex-row items-center justify-center w-[70%] max-w-[600px] mx-auto rounded-4xl text-darkPurple transition duration-300 ease-in-out hover:bg-darkPurple hover:text-white hover:underline md:w-[80%] lg:w-[90%]' href={url}>
            <div className="flex gap-0.5 items-center justify-center px-[22px] py-2 relative lg:py-3.5">
                <p className="font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap tracking-[0.4px] whitespace-pre lg:text-base" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {text}
                </p>
            </div>
        </Link>
    )
}