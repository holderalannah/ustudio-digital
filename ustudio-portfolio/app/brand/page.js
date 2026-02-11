'use client';

import { useState, useEffect } from 'react';
import Container from '../Components/Container';
import Innerpage from '../Components/Layout/Innerpage';
import Image from 'next/image';

import { aiSolutions } from '../data/ai-data';
import { campaigns } from '../data/campaign-data';
import { socialsData } from '../data/social-data';
import { webDevworks } from '../data/digital-data';

export default function Page() {

    const [brandProjects, setBrandProjects] = useState([]);

    const allData = [...aiSolutions, ...campaigns, ...socialsData, ...webDevworks ];

    const brandResult = allData.filter((data) => data.hasOwnProperty('projectBrand'));

    const brands = [
        'Dove', 'Knorr', 'Hellmann\'s', 'Axe'
    ];

    const getResults = (selectedBrand) => {
        const filteredResults = brandResult.filter((data) => data.projectBrand === selectedBrand);
        setBrandProjects(filteredResults);
    }

    useEffect(() => {
        console.log(brandProjects)
    },[brandProjects])

    return(
          <Innerpage title="Filter By Brand">
    
        <Container>
            <div className='min-h-[700px]'>
                <p>Pick a brand below and projects for that brand will appear.</p>

                <div className='flex flex-wrap gap-4 mt-5 mb-8 lg:mb-12'>
                    {brands.map((brandName,i) => (
                        <button className='btn py-2 px-5 rounded-lg bg-[#150f9b] text-white cursor-pointer' key={`brand-${i}`} onClick={() => getResults(brandName)}>
                            {brandName}
                        </button>
                    ))}
                    
                </div>
                { brandProjects.length > 0 && (
                    <div id="brand-container" className='flex flex-wrap gap-5'>
                        { brandProjects.map((data, index) =>  (
                            <button key={`project-${index}-${data.projectBrand}`} className='block mt-5 w-[24%]'>
                                <Image src={data.projectImg} alt={data.projectTitle} height={340} className='mb-5 w-full' />
                                    <p className='text-sm uppercase font-bold text-[#545151]'>{data.projectBrand}</p>
                                    <p className='text-lg font-semibold'>{data.project}</p>
                                <p className='text-sm hover:underline'>View</p>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        
        </Container>
       </Innerpage>
    )
}
