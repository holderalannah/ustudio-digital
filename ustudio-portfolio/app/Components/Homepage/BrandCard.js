import Image from "next/image";
import Link from 'next/link';

export default function BrandCard({data}){

    function isOdd(number) {
        return number % 2 !== 0;
    }

    return(
        <ul className="brand-card-list flex items-center justify-start">
            {data.map((card,index) =>
            <li key={`brand-${card.brandName}-${index}`}>
                <div className={`brand-card bg-gray-50 rounded-4xl flex justify-center items-center w-[11.6vw] h-[11.6vw] shadow-2xl ${isOdd(index) ? 'rotate-2' : '-rotate-3'}`}>
                    <Link target='_blank' className='transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115' href={card.brandUrl}>
                        <Image src={card.brandImg} alt={`${card.brandName} logo`} className="max-w-[120px]" loading="eager" />
                    </Link>
                </div>
            </li>
            )}
        </ul>
    )
}