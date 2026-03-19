'use client'

import { useState } from 'react';
import { motion } from 'motion/react';
import PortfolioCard from './PortfolioCard';

type Props = {
  itemsPerPage?: number;
  portfolioType: any[]; // replace `any` with your item type
  onItemClick: (index: number) => void;
};

export default function PortfolioComponent({
  itemsPerPage = 8,
  portfolioType,
  onItemClick,
}: Props) {
  const ITEMS_PER_PAGE = itemsPerPage;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const visibleItems = portfolioType.slice(0, visibleCount);
  const hasMore = visibleCount < portfolioType.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + ITEMS_PER_PAGE, portfolioType.length));
  };

  const showLess = () => {
    setVisibleCount(ITEMS_PER_PAGE);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // animations
  const rowVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    init: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.ul
        id="portfolio-brands"
        className="flex flex-wrap"
        style={{ display: 'flex', gap: '0rem' }}
        variants={rowVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.05, once: true }}
      >
        {visibleItems.map((work, idx) => {
          // compute the global index corresponding to this item
          const globalIndex = idx; // OK because we slice from 0; if you later use offset, compute offset + idx

          return (
            <motion.li
              key={`${work.projectTitle}-${globalIndex}`}
              className="w-full md:w-[31.4%] relative shadow-xl bg-transparent xl:w-[23.7%] group/item card h-[381px]"
              variants={cardVariants}
              initial="init"
              whileInView="animate"
              viewport={{ amount: 0.25, once: true }}
              transition={{ type: 'spring', bounce: 0.4 }}
            >
              <PortfolioCard
                data={work}
                portfolioType={portfolioType}
                onClick={() => onItemClick(globalIndex)}
              />
            </motion.li>
          );
        })}
      </motion.ul>

      <div className="mt-6 flex justify-center gap-4 md:mt-14">
        {hasMore ? (
          <button onClick={loadMore} className="px-6 py-3 rounded-md bg-darkPurple text-white font-semibold">
            Load more
          </button>
        ) : (
          portfolioType.length > ITEMS_PER_PAGE && (
            <button onClick={showLess} className="px-6 py-3 rounded-md bg-gray-200 text-black font-medium">
              Show less
            </button>
          )
        )}
      </div>
    </>
  );
}