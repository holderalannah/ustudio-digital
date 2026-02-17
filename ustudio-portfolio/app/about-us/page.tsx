import Container from '../Components/Container';
import Innerpage from '../Components/Layout/Innerpage';
import Video from 'next-video';
import studioReel from '/videos/2025_Seezle_Reel_Ustudio.mp4';

export default function AboutUs(){
    return(
       <Innerpage title="About Us">
    
        <Container>
            <div className='min-h-[700px]'>
                <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[885px]'>U-Studio is Unilever's innovative in-house digital marketing and creative agency, established in collaboration with Oliver in 2016. Designed to produce swift and cost-effective content for Unilever's diverse brand portfolio, U-Studio operates across more than 20 global locations. The agency specializes in digital and social content, and has recently expanded its expertise to include AI-driven creations. By leveraging its integrated approach, U-Studio delivers production that is 30% more affordable and faster than traditional external agencies.</p>

                <p className='px-0 text-center pb-6 text-lg w-full mx-auto lg:px-20 lg:text-xl lg:max-w-[885px]'>As Unilever's globally award-winning in-house agency, we deliver unmissable creative solutions across digital commerce, social, fully integrated campaigns and more. It's why <strong>U-Studio has just been named Campaign's Global In-House Agency of the Year for a third year running.</strong></p>

                <div className='max-w-[750px] mt-6 mb-6 mx-auto lg:mt-8 lg:mb-0'>
                    <Video src={studioReel} />
                </div>
            </div>
        </Container>
       </Innerpage>
       
    )
}