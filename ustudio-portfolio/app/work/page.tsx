'use client'

import { useState, useEffect } from 'react';
import Innerpage from "../Components/Layout/Innerpage";
import DigitalModal from '../Components/DigitalModal';
import PortfolioComponent from '../Components/PortfolioComponent';
import { webDevworks } from '../data/digital-data';
import { aiSolutions } from '../data/ai-data';
import { campaigns } from '../data/campaign-data';
import { socialsData } from '../data/social-data';

type WebDevItem = typeof webDevworks[number];
type AiItem = typeof aiSolutions[number];
type CampaignItem = typeof campaigns[number];
type SocialItem = typeof socialsData[number];

type WorkItem = WebDevItem | AiItem | CampaignItem | SocialItem;

export default function WebWork() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [portfolioWork, setPortfolioWork] = useState<WorkItem[]>([]);

  const openModal = (index: number) => {
    setSelectedItem(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const allData: WorkItem[] = [...aiSolutions, ...campaigns, ...socialsData, ...webDevworks];

  const workResult = allData.filter((data) => (data as any).projectType !== undefined);


  const portfolioWorkTypes = [
    'web dev', 'wyng campaigns', 'socials', 'ai solutions'
  ];

  const getResults = (selectedType: string) => {
    const filteredResults = workResult.filter((data) => (data as any).projectType === selectedType);
    setPortfolioWork(filteredResults);
  };
console.log(portfolioWork);

  if (portfolioWork.length === 0 ) { setPortfolioWork(webDevworks)}

  useEffect(() => {
    },[portfolioWork])

  return (
    <Innerpage title="Our Work">
      {selectedItem !== null && (
        <DigitalModal
          data={webDevworks[selectedItem]}
          isOpen={isOpen}
          onClose={closeModal}
          isWeb={true}
        />
      )}

      <div className='flex justify-center gap-4 md:gap-7'>
        {portfolioWorkTypes.map((workType, i) => (
          <button className={`draw-border-link border border-solid border-transparent work-btn relative btn py-2 px-5 rounded-lg  text-black font-medium capitalize cursor-pointer ${portfolioWork.length > 0 && portfolioWork[0].projectType == workType && 'selected'}`} key={`brand-${i}`} onClick={() => getResults(workType)}>
            {workType}
          </button>
        ))}
      </div>

      {portfolioWork.length > 0 && (
        <div className='mt-7 lg:mt-12'>
          <PortfolioComponent
            itemsPerPage={8}
            portfolioType={portfolioWork}
            onItemClick={openModal}
          />
        </div>
      )}

      {/* <div>
        <PortfolioComponent
          itemsPerPage={8}
          portfolioType={webDevworks}
          onItemClick={openModal}
        />
      </div> */}
    </Innerpage>
  );
}