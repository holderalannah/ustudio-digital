import Modal from "./Modal"
import Link from "next/link"
import Image from "next/image";
import ComputerLayer from '../../public/images/computer-layer.png'

function CampaignSection({children, heading}){
    return(
        <div className="mb-5">
            <h3 className="font-bold text-lg">{heading}</h3>
            <p className="text-sm">{children}</p>
        </div>
    )
}

export default function CampaignModal({data, isOpen, onClose, isWeb }){
    return (
       <Modal isOpen={isOpen} onClose={onClose} addedStyles={'h-[95vh] lg:h-[80vh]'}>
            <h2 className="font-extrabold text-2xl lg:text-3xl">{data.projectTitle}</h2>

            <div className="flex w-full justify-between items-start flex-col overflow-auto h-[90%] md:h-[87%] lg:flex-row lg:h-[80%] lg:overflow-auto lg:justify-center lg:items-center lg:mb-7">
                <div className="w-full h-[85%] lg:h-full lg:w-1/2 lg:overflow-auto">
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

                <div className="w-full hidden justify-center md:items-center md:flex md:flex-col lg:items-baseline lg:w-1/2 lg:flex-row lg:flex lg:overflow-hidden">
                    <div className="computerLayer relative">
                        <Image src={ComputerLayer} alt="Computer" className="md:max-w-[320px] lg:max-w-[410px]" />
                        <div className="computerlayer__screen absolute overflow-hidden md:top-4 md:h-[153px] md:left-10 lg:top-5 lg:left-[55px] lg:h-48">
                            <Image src={data.projectImg} alt={data.projectTitle} className='w-full md:max-w-60 lg:max-w-[300px]' />   
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