import Container from '../Container';
import Heading from '../Layout/Heading1';

export default function Innerpage({children, title}){
return(
        <div className='pb-5 lg:pb-14'>
            <div className='h-[150px] bg-cover bg-center bg-no-repeat bg-header mb-8 relative flex justify-center items-center text-white! lg:h-[200px] lg:mb-12'><Heading>{title}</Heading></div>
            <Container>
                {children}
            </Container>
       </div>
)
}