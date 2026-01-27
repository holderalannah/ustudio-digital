import Container from '../Components/Container';
import Innerpage from '../Components/Layout/Innerpage';
import Video from 'next-video';
import studioReel from '/videos/2025_Seezle_Reel_Ustudio.mp4';

export default function AboutUs(){
    return(
       <Innerpage title="About Us">
    
        <Container>
            <div className='min-h-[700px]'>
                <p className='px-20 text-center pb-6 text-lg w-full mx-auto lg:text-xl lg:max-w-[885px]'>As Unilever’s globally award-winning in-house agency, we deliver unmissable creative solutions across digital commerce, social, fully integrated campaigns and more. It’s why <strong>U-Studio has just been named Campaign’s Global In-House Agency of the Year for a third year running.</strong></p>

                <div className='max-w-[750px] mt-8 mx-auto'>
                    <Video src={studioReel} />
                </div>
            </div>
        </Container>
       </Innerpage>
       
    )
}