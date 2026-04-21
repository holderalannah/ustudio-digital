// WebWorkClient.tsx
'use client'

import React, { useEffect, useState } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import AiModal from '../Components/AiModal';
import CampaignModal from '../Components/CampaignModal';
import DigitalModal from '../Components/DigitalModal';
import SocialModal from '../Components/SocialModal';
import OohModal from '../Components/OohModal';
import PortfolioComponent from '../Components/PortfolioComponent';
import { webDevworks as webDevworksData } from '../data/digital-data';
import { aiSolutions } from '../data/ai-data';
import { campaigns } from '../data/campaign-data';
import { socialsData } from '../data/social-data';
import { oohData } from '../data/ooh-data';

// Reuse the concrete data types for accurate typing
type WebDevItem = typeof webDevworksData[number];
type AiItem = typeof aiSolutions[number];
type CampaignItem = typeof campaigns[number];
type SocialItem = typeof socialsData[number];
type OohItem = typeof oohData[number];

type WorkItem = WebDevItem | AiItem | CampaignItem | SocialItem | OohItem;

type Props = {
  allData: WorkItem[];
  webDevworks: WebDevItem[]; // fallback default set from server
};

export default function WorkClient({ allData, webDevworks }: Props) {
  const router = useRouter();
  const pathname = usePathname() ?? '/';
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [currentFilter, setCurrentFilter] = useState<string>('web dev');
  const [portfolioWork, setPortfolioWork] = useState<WorkItem[]>([]);

  const workResult = allData.filter((d) => (d as any).projectType !== undefined);

  const portfolioWorkTypes = ['web dev', 'wyng campaigns', 'socials', 'ooh', 'ai solutions'];

  // Initialize filter from URL (and respond to changes)
  useEffect(() => {
    const typeParam = searchParams?.get('type') ?? '';
    const initialType = portfolioWorkTypes.includes(typeParam) ? typeParam : 'web dev';
    setCurrentFilter(initialType);

    const filtered = workResult.filter((d) => (d as any).projectType === initialType);
    setPortfolioWork(filtered.length ? filtered : [...webDevworks]);

    // reset selected item when URL filter changes
    setSelectedItem(null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

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

    // update URL ?type=... (replace to avoid adding history entries)
    const params = new URLSearchParams();
    params.set('type', selectedType);
    router.replace(`${pathname}?${params.toString()}`);
    setSelectedItem(null);
  };

  const selectedItemData = selectedItem !== null && portfolioWork[selectedItem] ? portfolioWork[selectedItem] : null;

  return (
    <>
      {/* Modal rendering based on selected item's projectType */}
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
            data={selectedItemData as OohItem}
            isOpen={isOpen}
            onClose={closeModal}
          />
        ) : (
          <AiModal
            data={selectedItemData as AiItem}
            isOpen={isOpen}
            onClose={closeModal}
          />
        )
      )}

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-7">
        {portfolioWorkTypes.map((workType, i) => (
          <button
            key={`brand-${i}`}
            className={`draw-border-link border border-solid border-transparent work-btn relative btn py-2 px-5 rounded-lg text-black font-medium capitalize cursor-pointer ${workType === 'ooh' && 'uppercase'}  ${currentFilter === workType ? 'selected' : ''}`}
            onClick={() => getResults(workType)}
          >
            {workType}
          </button>
        ))}
      </div>

      {/* Portfolio list */}
      {portfolioWork.length > 0 && (
        <div className="mt-7 lg:mt-12">
          <PortfolioComponent
            itemsPerPage={8}
            portfolioType={portfolioWork}
            onItemClick={openModal}
          />
        </div>
      )}
    </>
  );
}