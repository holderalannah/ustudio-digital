import Modal from "./Modal"
import Link from "next/link"
import Image from "next/image";
import PhoneLayer from '../../public/images/phone-layer.png'

function CampaignSection({children, heading}){
    return(
        <div className="mb-5">
            <h3 className="font-bold text-lg">{heading}</h3>
            <p className="text-sm md:text-base">{children}</p>
        </div>
    )
}

export default function CampaignModal({data, isOpen, onClose }){
    return (
       <Modal isOpen={isOpen} onClose={onClose} addedStyles={'overflow-auto h-[95vh] md:overflow-hidden md:h-[865px] lg:h-[80vh]'}>
            <h2 className="font-extrabold text-2xl lg:text-3xl">{data.projectTitle}</h2>

            <div className={`flex w-full justify-between items-start flex-col h-[87%] flex-wrap overflow-auto overflow-x-hidden md:h-[89%] lg:flex-row lg:h-[80%] lg:overflow-auto lg:justify-center lg:items-center lg:mb-7`}>
                <div className="w-full h-[52%] overflow-auto md:pr-1.5 md:h-[65%] md:w-[47%] lg:pr-0 lg:h-full lg:w-1/2 lg:overflow-auto">
                    <CampaignSection heading="U-Studio">
                        <p>Toronto, Ontario, <strong>Canada</strong></p>
                    </CampaignSection>

                    <CampaignSection heading="Business Group">
                       {data.projectBusinessGroup}
                    </CampaignSection>

                    <CampaignSection heading="Category">
                        {data.projectCategory}
                    </CampaignSection>

                    <CampaignSection heading="Brand">
                        {data.projectBrand}
                    </CampaignSection>
                    
                    <CampaignSection heading="Briefing">
                       {data.projectBriefing}
                    </CampaignSection>
                    
                    <CampaignSection heading="Solution">
                        {data.projectSolution}
                    </CampaignSection>
                    
                    { data.projectPlatform &&
                        <CampaignSection heading="Platforms">
                        {data.projectPlatform}
                        </CampaignSection>
                    }

                </div>

                <div className="w-full justify-center items-center flex flex-col h-[47%] md:w-1/2 md:h-auto lg:items-baseline lg:w-1/2 lg:flex-row lg:flex lg:overflow-hidden">
                    
                        <div className="phoneLayer relative">
                            <Image src={PhoneLayer} alt="mobile phone" className="relative z-10 max-w-[120px] md:max-w-[234px] lg:max-w-60" />
                                <div className="phonelayer__screen absolute overflow-hidden h-[219px] top-[7px] left-2 md:h-[426px] md:left-4 md:top-[15px] lg:top-3.5 lg:left-4 lg:h-[440px]">
                                    <Image src={data.projectImg} alt={data.projectTitle} className='w-[102px] max-w-[234px]  md:w-full md:max-w-[200px] lg:max-w-[204px]' />   
                                </div>
                        </div>
                    
                </div>
            </div>

            { data.projectUrl &&
                <Link href={data.projectUrl} target='_blank' className="font-bold py-2.5 px-3 bg-darkPurple rounded-2xl text-white text-sm hover:bg-darkPink">View Campaign</Link>
            }

        </Modal>
    )
};