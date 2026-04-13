import Modal from "./Modal"
import Video from 'next-video';
import Image from "next/image";


function CampaignSection({ children, heading }) {
    return (
        <div className="mb-5">
            <h3 className="font-bold text-lg">{heading}</h3>
            <p className="text-sm md:text-base">{children}</p>
        </div>
    )
}

export default function OohModal({ data, isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} addedStyles={'overflow-auto h-auto md:overflow-hidden flex flex-col justify-center items-center'}>
            <h2 className="font-extrabold text-2xl lg:text-3xl">{data.projectTitle}</h2>


            <div className={`flex w-full items-center flex-col h-[87%] mb-0`}>
                {/* {data.projectBriefing && (
                    <div className="w-full h-[52%] overflow-auto md:pr-1.5 md:h-[65%] md:w-[47%] lg:pr-0 lg:h-full lg:w-[30%] lg:overflow-auto">
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

                        {data.projectBriefing && (
                            <CampaignSection heading="Briefing">
                                {data.projectBriefing}
                            </CampaignSection>
                        )}

                        {data.projectSolution && (
                            <CampaignSection heading="Solution">
                                {data.projectSolution}
                            </CampaignSection>
                        )}

                        {data.projectPlatform &&
                            <CampaignSection heading="Platforms">
                                {data.projectPlatform}
                            </CampaignSection>
                        }

                    </div>
                )} */}
                <div className="w-full justify-center items-center flex flex-col h-full lg:items-baseline lg:overflow-hidden">

                    <div className=" relative">
                        <div className="">
                            {/* <Image src={data.projectImg} alt={data.projectTitle} className='w-full' /> */}
                            <Video className="md:min-h-[270px] lg:min-h-[526px]" src={data.projectVideo} />
                        </div>
                    </div>

                </div>
            </div>



        </Modal>
    )
};