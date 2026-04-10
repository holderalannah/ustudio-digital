'use client'

import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import Innerpage from "../Components/Layout/Innerpage";
import AiModal from '../Components/AiModal';
import CampaignModal from '../Components/CampaignModal';
import DigitalModal from '../Components/DigitalModal';
import SocialModal from '../Components/SocialModal';
import OohModal from '../Components/OohModal';
import PortfolioComponent from '../Components/PortfolioComponent';
import { webDevworks } from '../data/digital-data';
import { aiSolutions } from '../data/ai-data';
import { campaigns } from '../data/campaign-data';
import { socialsData } from '../data/social-data';
import { oohData } from '../data/ooh-data';

type WebDevItem = typeof webDevworks[number];
type AiItem = typeof aiSolutions[number];
type OohItem = typeof aiSolutions[number];
type CampaignItem = typeof campaigns[number];
type SocialItem = typeof socialsData[number];

type WorkItem = WebDevItem | AiItem | CampaignItem | SocialItem | OohItem;

export default function WebWork() {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [currentFilter, setCurrentFilter] = useState<string>('web dev');
  const [portfolioWork, setPortfolioWork] = useState<WorkItem[]>([]);

  const allData: WorkItem[] = [...aiSolutions, ...campaigns, ...socialsData, ...webDevworks, ...oohData];
  const workResult = allData.filter((data) => (data as any).projectType !== undefined);

  const portfolioWorkTypes = ['web dev', 'wyng campaigns', 'socials', 'ooh', 'ai solutions'];

  // Initialize filter from URL (and respond to changes)
  useEffect(() => {
    const typeParam = searchParams?.get('type') ?? '';
    const initialType = portfolioWorkTypes.includes(typeParam) ? typeParam : 'web dev';
    setCurrentFilter(initialType);

    const filtered = workResult.filter((d) => (d as any).projectType === initialType);
    // if no results for the selected type, fall back to webDevworks (or set to empty as you prefer)
    setPortfolioWork(filtered.length ? filtered : [...webDevworks]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]); // run when the URL search params change

  const openModal = (index: number) => {
    setSelectedItem(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  const getResults = (selectedType: string) => {
    setCurrentFilter(selectedType);
    const filteredResults = workResult.filter((data) => (data as any).projectType === selectedType);
    setPortfolioWork(filteredResults.length ? filteredResults : []);

    const params = new URLSearchParams();
    params.set('type', selectedType);
    // replace so it doesn't add history entries
    router.replace(`${pathname}?${params.toString()}`);

  };

  const selectedItemData = selectedItem !== null ? portfolioWork[selectedItem] : null;

  return (
    <Innerpage title="Our Work">
      {selectedItemData && (
        (selectedItemData as any).projectType === 'web dev' ? (
          <DigitalModal
            data={selectedItemData as WebDevItem}
            isOpen={isOpen}
            onClose={closeModal}
            isWeb={true}
          />
        ) : (selectedItemData as any).projectType === 'wyng campaigns' ? (
          <CampaignModal
            data={selectedItemData as CampaignItem}
            isOpen={isOpen}
            onClose={closeModal}
          />
        ) : (selectedItemData as any).projectType === 'socials' ? (
          <SocialModal
            data={selectedItemData as SocialItem}
            isOpen={isOpen}
            onClose={closeModal}
          />
        ) : (selectedItemData as any).projectType === 'ooh' ? (
          <OohModal
            data={selectedItemData as SocialItem}
            isOpen={isOpen}
            onClose={closeModal}
          />
        )  : (
          <AiModal
            data={selectedItemData as AiItem}
            isOpen={isOpen}
            onClose={closeModal}
          />
        )
      )}

      <div className="flex flex-wrap justify-center gap-4 md:gap-7">
        {portfolioWorkTypes.map((workType, i) => (
          <button
            className={`draw-border-link border border-solid border-transparent work-btn relative btn py-2 px-5 rounded-lg text-black font-medium capitalize cursor-pointer ${currentFilter === workType ? 'selected' : ''}`}
            key={`brand-${i}`}
            onClick={() => getResults(workType)}
          >
            {workType}
          </button>
        ))}
      </div>

      {portfolioWork.length > 0 && (
        <div className="mt-7 lg:mt-12">
          <PortfolioComponent
            itemsPerPage={8}
            portfolioType={portfolioWork}
            onItemClick={openModal}
          />
        </div>
      )}
    </Innerpage>
  );
}

