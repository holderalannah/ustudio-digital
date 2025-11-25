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

  return (
    <div id="home-page" className="mt-5">
      <Container>
        <h1 className="font-normal text-3xl mx-auto text-center leading-[0.45] tracking-[-2px] md:text-6xl lg:text-8xl lg:max-w-[931px] lg:leading-[0.85] lg:tracking-[-4px]">Hello from your in house agency</h1>

        <div className="hero-img-container">
          <Image className="max-w-[1110px] mx-auto w-full mt-5 lg:mt-16" src={HeroImg}  alt="Hero Image" />
        </div>

        <FeatureCards title="Latest Digital Web" cardInfo={digitalProjects} />

        <Brands />
        
      </Container>
      <CenteredCallout />
    </div>
  );
}