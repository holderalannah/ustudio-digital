import Nav from './Nav';
import CenteredCallout from '../CenteredCallout';

export default function Footer(){
    const thisyear = new Date();
    const year = thisyear.getFullYear();
    console.log()
    return(
        <footer id="footer" >
            <CenteredCallout />
        </footer>
    )
}