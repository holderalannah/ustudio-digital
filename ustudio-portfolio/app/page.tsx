import Image from "next/image";
import Container from './Components/Container';
import HeroImg from '../public/images/hero-image.png';
import CenteredCallout from './Components/CenteredCallout';
import Brands from './Components/Homepage/Brands';
import FeatureCards from './Components/Homepage/FeatureCards';

import DoveCompImg from '../public/images/digital/dove-compliment.jpg';
import DoveCrumblImg from '../public/images/digital/dove-x-crumble.jpg';
import DoveHolidayImg from '../public/images/digital/dove-holiday.jpg';
import KnorrFlavImg from '../public/images/digital/knorr-flavourmania.jpg';
import KnorrPastesImg from '../public/images/digital/knorr-pastes.jpg';

import AxeCamp from '../public/images/campaigns/campaign-axe-golden-ticket.png';
import TresemmeOfferCamp from '../public/images/campaigns/campaign-tresemme-offer.png';
import DoveWalmartCamp from '../public/images/campaigns/campaign-dove-walmart-offer.png';
import DMCEaCamp from '../public/images/campaigns/campaign-dmc-ea.png';

export default function Home() {

    const digitalProjects = [
         {
            cardBrand: "Dove",
            cardImg: DoveCrumblImg,
            cardProject: "Dove X Crumb",
            cardUrl: "/"
        },
        {
            cardBrand: "Dove",
            cardImg: DoveHolidayImg,
            cardProject: "Holiday Limited Edition",
            cardUrl: "/"
        },
        {
            cardBrand: "Dove",
            cardImg: DoveCompImg,
            cardProject: "Change the Compliment",
            cardUrl: "/"
        },
        {
            cardBrand: "Knorr",
            cardImg: KnorrFlavImg,
            cardProject: "Flavourmaina",
            cardUrl: "/"
        },
        {
            cardBrand: "Knorr",
            cardImg: KnorrPastesImg,
            cardProject: "Premium Flavour Base Pastes",
            cardUrl: "/"
        },
    ];

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
    
    ]

  return (
    <div id="home-page" className="mt-5">
      <Container>
        <h1 className="font-normal text-5xl mx-auto text-center leading-[0.85] tracking-[-2px] md:text-6xl lg:text-8xl lg:max-w-[931px] lg:tracking-[-3.4px]">Hello from your in house&nbsp;agency</h1>

        <div className="hero-img-container mt-5 lg:mt-16 lg:mb-20">
          <Image className="max-w-[1110px] mx-auto w-full " src={HeroImg}  alt="Hero Image" />
        </div>

        <FeatureCards sliderNumber={4} campaign={false} title="Latest Digital Web" cardInfo={digitalProjects} />

        <Brands />

        <div className="pb-10">
          <FeatureCards sliderNumber={4} campaign={true} title="Newest Campaigns" cardInfo={campaigns} />
        </div>
        
      </Container>

      <CenteredCallout />
    </div>
  );
}