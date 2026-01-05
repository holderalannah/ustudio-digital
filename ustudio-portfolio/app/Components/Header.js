'use client';

import { useState } from 'react';
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

    const menuBtn = `block bg-black h-0.5 w-5 rounded-1`;

    const [open, setOpen] = useState(false);

    function OnMenuBtnClick(e){
        e.preventDefault();
        if (open === false){
            setOpen(true)
            console.log('open');
        } else {
            setOpen(false);
            console.log('close')
        }
    }

    return(
        <header id="header">
            <div className='flex mx-auto w-[85%] max-w-6xl justify-between items-center relative lg:justify-between xl:max-w-7xl'>
                <div id="logo" className='p-3.5'>
                    <Link href="/">
                        <Image className='max-w-[220px]' src={SiteLogo} alt="U-Studio Logo" />
                    </Link>
                </div>
                <button aria-label='Menu' className='absolute right-0 w-10 h-10 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-1 bg-pink-500' onClick={OnMenuBtnClick}>
                    <span className={menuBtn}></span>
                    <span className={menuBtn}></span>
                    <span className={menuBtn}></span>
                </button>
                <Nav obj={navLinks} addedNavClass={`${open ? 'fixed top-[85px] left-0 w-full h-full bg-white p-6' : 'hidden'} lg:block`} addedClass={`${open ? 'flex flex-col' : ''} justify-around gap-5 w-full lg:flex lg:gap-7 xl:gap-12  font-semibold`} />
            </div>
        </header>
    )
}
