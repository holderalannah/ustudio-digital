import Link from 'next/link';
import Image from 'next/image';

export default function CampaignCard({cardImg, cardUrl, cardProject, cardBrand}){
    return (
        <Link href={cardUrl} target='_blank' className='block mt-5 '>
            <Image src={cardImg} alt={cardProject} height={340} className=' mb-5' />
                <p className='text-sm uppercase font-bold text-[#545151]'>{cardBrand}</p>
                <p className='text-lg font-semibold'>{cardProject}</p>
            <Link href={cardUrl} target='_blank' className='text-sm hover:underline'>View</Link>
        </Link>
    )
}