'use client'

import { useState } from 'react';
import Innerpage from "../Components/Layout/Innerpage";
import DigitalModal from '../Components/DigitalModal';
import { webDevworks } from '../data/digital-data';
import PortfolioComponent from '../Components/PortfolioComponent';

export default function WebWork() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedItem(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <Innerpage title="Web Portfolio">
      {selectedItem !== null && (
        <DigitalModal
          data={webDevworks[selectedItem]}
          isOpen={isOpen}
          onClose={closeModal}
          isWeb={true}
        />
      )}

      <div>
        <PortfolioComponent
          itemsPerPage={8}
          portfolioType={webDevworks}
          onItemClick={openModal}
        />
      </div>
    </Innerpage>
  );
}