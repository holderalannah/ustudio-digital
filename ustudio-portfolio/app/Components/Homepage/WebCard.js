
import Link from 'next/link';
import Image from 'next/image';

export default function WebCard({cardImg, cardUrl, cardProject, cardBrand}){
    return(
        <div className=' group/item h-[416px] overflow-hidden'>
            {cardUrl && (
                <Link target='_blank' href={cardUrl} className='webcard relative z-10 group/item'>
                    <Image src={cardImg} alt={cardProject} className='mb-5 h-full max-w-none w-auto transition-all group-hover/item:scale-[1.4] group-focus/item:scale-[1.4]' />
                    <div className='opacity-0 content pl-4 pb-0 pt-1 text-white absolute bottom-4 left-4 leading-none z-50 transition-all group-hover/item:opacity-100 group-focus/item:opacity-100'>
                        <p className='text-sm uppercase font-bold'>{cardBrand}</p>
                        <p className='text-lg'>{cardProject}</p>

                        <Link target='_blank' href={cardUrl} className='text-sm hover:underline focus:underline'>View</Link>
                    </div>
                </Link>
            ) } 
            
        </div>
    )
}