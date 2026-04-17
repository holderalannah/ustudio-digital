import Image from 'next/image';

export default function TeamCard({data}){
    return(
        <div className="teamCard relative md:w-[32%] mb-5 md:mb-8">
            {data.teamMemberPic && (
                <div className="teamCard_container max-w-[320px] md:max-w-none">
                    <Image src={data.teamMemberPic} alt={`picture of ${data.teamMemberName}`} />
                </div>
            )}
            <div className='teamCard_content-container'>
                <div className="teamCard_content-inner-container absolute z-10 bottom-4.5 text-white left-6">
                    <div><h3 className='mt-3.5 font-bold'>{data.teamMemberName}</h3></div>
                    <div><p>{data.teamMemberJobTitle}</p></div>
                </div>
            </div>
        </div>
    )
}
