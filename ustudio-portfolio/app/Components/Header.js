import Image from 'next/image';
import Link from 'next/link';
import SiteLogo from '../../public/ustudio-logo.png';
import Nav from './Nav'

export default function Header(){

    const navLinks = [
        {
            linkName : "About Us",
            linkUrl: "about-us"
        },
        {
            linkName : "Web Work",
            linkUrl: "web-work"
        },
        {
            linkName : "Email Campaigns",
            linkUrl: "campaigns"
        },
        {
            linkName : "Socials",
            linkUrl: "socials"
        }
    ];
    return(
        <header id="header">
            <div className='flex mx-auto w-[85%] max-w-6xl xl:max-w-7xl  justify-between items-center'>
                <div id="logo" className='p-3.5'>
                    <Link href="/">
                        <Image className='max-w-[220px]' src={SiteLogo} alt="U-Studio Logo" />
                    </Link>
                </div>
                <Nav obj={navLinks} addedClass="flex justify-around gap-5 lg:gap-7 xl:gap-12 w-full font-semibold" />
            </div>
        </header>
    )
}
