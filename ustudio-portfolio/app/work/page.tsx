import React, { Suspense } from 'react';
import Innerpage from "../Components/Layout/Innerpage";
import WorkClient from '../Components/WorkClient'; // ensure the path is correct
import { webDevworks } from '../data/digital-data';
import { aiSolutions } from '../data/ai-data';
import { campaigns } from '../data/campaign-data';
import { socialsData } from '../data/social-data';
import { oohData } from '../data/ooh-data';

export default function WorkPage() {
// Prepare the data on the server
  const allData = [...aiSolutions, ...campaigns, ...socialsData, ...webDevworks, ...oohData];

  return (
    <Innerpage title="Our Work">
      <Suspense fallback={<div>Loading…</div>}>
        {/* pass data down to the client component */}
        <WorkClient allData={allData} webDevworks={webDevworks} />
      </Suspense>
    </Innerpage>
  );
}

