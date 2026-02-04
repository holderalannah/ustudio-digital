
import Link from 'next/link';
import Image from 'next/image';

export default function WebCard({cardImg, cardUrl, cardProject, cardBrand}){
    return(
        <>
            {cardUrl && (
                <Link href={cardUrl} className=''>
                <Image src={cardImg} alt={cardProject} className='rounded-[35px] shadow-lg mb-5' />
                <div className='bg-white-overlay shadow-lg'></div>
            </Link>
            ) } 
            <div className='content bg-white w-[ pl-4 pb-0 pt-1 text-whote absolute bottom-9 left-4 leading-none z-50'>
                <p className='text-sm uppercase font-bold'>{cardBrand}</p>
                <p className='text-lg'>{cardProject}</p>

                {cardUrl && ( <Link href={cardUrl} className='text-sm hover:underline'>View</Link> )} 
            </div>
        </>
    )
}