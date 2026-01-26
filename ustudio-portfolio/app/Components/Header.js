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
            linkName : "Wyng Campaigns",
            linkUrl: "campaigns"
        },
        {
            linkName : "Socials",
            linkUrl: "socials"
        },
          {
            linkName : "AI Solutions",
            linkUrl: "ai-solutions"
        }
    ];

    const menuBtn = `block bg-white h-0.5 w-5 rounded-1 transition duration-200 ease-in-out`;
    const menuBtnOpen = `absolute top-0 left-0 right-0 bottom-0 m-auto`;

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
                <button aria-label='Menu' className='w-10 h-10 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-1 bg-darkPink relative lg:hidden' onClick={OnMenuBtnClick}>
                    <span className={ `${menuBtn} ${ open && menuBtnOpen + ' rotate-135'}`}></span>
                    <span className={ `${menuBtn} duration-50! ${ open && 'opacity-0 -translate-5'}`}></span>
                    <span className={ `${menuBtn} ${ open && menuBtnOpen + ' -rotate-135'}`}></span>
                </button>
                <Nav obj={navLinks} addedNavClass={`transition-all duration-200 ease-in ${open ? 'fixed top-[85px] left-0 w-full h-full bg-white p-6' : 'hidden lg:block lg:static lg:bg-transparent lg:w-auto lg:h-auto'} lg:block`} addedClass={`${open ? 'flex flex-col lg:flex-row' : ''} justify-around gap-5 w-full lg:flex lg:gap-7 xl:gap-12 font-semibold`} />
            </div>
        </header>
    )
}
