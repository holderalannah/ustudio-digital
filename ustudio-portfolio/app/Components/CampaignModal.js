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

            <div className="flex w-full justify-between items-start flex-col overflow-auto h-[90%] lg:flex-row lg:h-[80%] lg:overflow-auto lg:justify-center lg:items-center">
                <div className="w-full h-full [>div]:mb-0! lg:w-1/2 lg:overflow-auto">
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

                <div className="w-1/2 hidden justify-center lg:flex">
                    <div className="computerLayer relative">
                        <Image src={ComputerLayer} alt="Computer" className="" />
                        <div className="computerlayer__screen absolute overflow-hidden top-6 left-[62px] h-[211px]">
                            <Image src={data.projectImg} alt={data.projectTitle} className='w-full max-w-[338px]' />   
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