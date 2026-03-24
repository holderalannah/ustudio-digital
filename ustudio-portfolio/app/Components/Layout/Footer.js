import FooterCallout from '../FooterCallout';

export default function Footer(){
    const thisyear = new Date();
    const year = thisyear.getFullYear();
    console.log()
    return(
        <footer id="footer" >
            <FooterCallout />
        </footer>
    )
}