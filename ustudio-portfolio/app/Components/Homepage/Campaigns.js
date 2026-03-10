'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import FeatureCards from "./FeatureCards";

import AxeCamp from '../../../public/images/campaigns/campaign-axe-golden-ticket.png';
import TresemmeOfferCamp from '../../../public/images/campaigns/campaign-tresemme-offer.png';
import DoveWalmartCamp from '../../../public/images/campaigns/campaign-dove-walmart-offer.png';
import DMCEaCamp from '../../../public/images/campaigns/campaign-dmc-ea.png';

export default function Campaigns(){

const campaigns = [
      {
          cardBrand: "Dove Men+Care",
          cardImg: DMCEaCamp,
          cardProject: "DMC x EA Sports Contest 2025",
          cardUrl: "https://unileverpromos-ca.wyng.com/dovemenplaysfc/preview"
      },
      {
          cardBrand: "Axe",
          cardImg: AxeCamp,
          cardProject: "Axe Golden Ticket 2025",
          cardUrl: "https://www.unileverpromos.ca/axegoldenticket/preview"
      },
          {
          cardBrand: "TRESemmé",
          cardImg: TresemmeOfferCamp,
          cardProject: "TRESemmé X Conair 2025",
          cardUrl: "https://unileverpromos-ca.wyng.com/tresemmeoffer/preview"
      },
          {
          cardBrand: "Dove",
          cardImg: DoveWalmartCamp,
          cardProject: "Dove X Walmart 2025",
          cardUrl: "https://unileverpromos-ca.wyng.com/doveoffer/preview"
      },
    
    ];

    const campRef = useRef(null);

    const { scrollYProgress} = useScroll({
        target: campRef,
        offset: ['start end', 'center center'],
    });

    const rawOpacity = useTransform(scrollYProgress, [0, 0.15, 0.6], [0, 0.65, 1]);
    const rawY = useTransform(scrollYProgress, [0, 0.6], [30, 0]); // 30px down -> 0

    const opacity = useSpring(rawOpacity, { stiffness: 100, damping: 20 });
    const y = useSpring(rawY, { stiffness: 120, damping: 24 });

    return(
        <div ref={campRef} className="pb-10">
            <motion.div style={{ opacity, y }}>
                <FeatureCards sliderNumber={4} campaign={true} title="Preview Our Campaigns" cardInfo={campaigns} />
            </motion.div>
        </div>
    )
}