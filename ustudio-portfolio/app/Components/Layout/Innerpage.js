import Container from '../Container';
import Heading from '../Layout/Heading1';

export default function Innerpage({children, title}){
return(
        <div className='pb-5 lg:pb-14'>
            <div className='h-[200px] bg-cover bg-center bg-no-repeat bg-header mb-14 relative flex justify-center items-center text-white!'><Heading>{title}</Heading></div>
            <Container>
                {children}
            </Container>
       </div>
)
}