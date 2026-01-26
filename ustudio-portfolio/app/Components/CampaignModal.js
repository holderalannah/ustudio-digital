import Modal from "./Modal"
import Link from "next/link"
import Image from "next/image";


function CampaignSection({children, heading}){
    return(
        <div className="mb-5">
            <h3 className="font-bold text-lg">{heading}</h3>
            <p className="text-sm">{children}</p>
        </div>
    )
}

export default function CampaignModal({data, isOpen, onClose}){
    return (
       <Modal isOpen={isOpen} onClose={onClose}>
            <h2 className="font-extrabold text-2xl lg:text-3xl">{data.projectTitle}</h2>

            <div className="flex w-full justify-between items-center">
                <div className="w-1/2">
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
                    
                    <CampaignSection heading="Platforms">
                       {data.projectPlatform}
                    </CampaignSection>
                    
                </div>

                <div className="w-1/2 flex justify-center">
                    <Image src={data.projectImg} alt={data.projectTitle} className='w-full max-w-[250px]' />     
                </div>
            </div>

            <Link href={data.projectUrl} target='_blank' className="font-bold py-2.5 px-3 bg-darkPurple rounded-2xl text-white text-sm hover:bg-darkPink">View Campaign</Link>

        </Modal>
    )
};