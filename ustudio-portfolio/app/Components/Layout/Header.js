'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import SiteLogo from '../../../public/ustudio_logo.png';
import WhiteLogo from '../../../public/ustudio_logo_white.png';
import Nav from './Nav';

export default function Header() {
  const pathname = usePathname() ?? '/';

  const navLinks = [
    { linkName: 'About Us', linkUrl: 'about-us' },
    { linkName: 'Web Work', linkUrl: 'work' },
    { linkName: 'Wyng Campaigns', linkUrl: 'campaigns' },
    { linkName: 'Socials', linkUrl: 'socials' },
    { linkName: 'AI Solutions', linkUrl: 'ai-solutions' },
    { linkName: 'Brands', linkUrl: 'brand' },
  ];

  const menuBtn = 'block bg-white h-0.5 w-5 rounded transition duration-200 ease-in-out';
  const menuBtnCenter = 'absolute inset-0 m-auto';

  const [open, setOpen] = useState(false);
  const [isHome, setIsHome] = useState(pathname === '/');

  // update isHome when the route changes
  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  // manage body class for menu overflow and add/remove resize listener
  useEffect(() => {
    const body = typeof document !== 'undefined' ? document.body : null;

    if (body) {
      if (open) body.classList.add('remove-overflow');
      else body.classList.remove('remove-overflow');
    }

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (body) body.classList.remove('remove-overflow');
    };
  }, [open]);

  const toggleMenu = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    setOpen((prev) => !prev);
  };

  return (
    <header id="header" className={`${isHome ? 'bg-transparent' : 'bg-white'} w-full lg:fixed lg:top-0 lg:z-80`}>
      <div className="flex mx-auto w-[85%] max-w-6xl justify-between items-center relative lg:justify-between xl:max-w-7xl">
        <div id="logo" className="p-3.5">
          <Link href="/">
            <Image className="max-w-[220px]" src={isHome ? WhiteLogo : SiteLogo} alt="U-Studio Logo" />
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="w-10 h-10 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-1 bg-darkPink relative lg:hidden"
          onClick={toggleMenu}
        >
          <span className={`${menuBtn} ${open ? `${menuBtnCenter} rotate-135` : ''}`} />
          <span className={`${menuBtn} transition-opacity duration-150 ${open ? 'opacity-0 -translate-y-1.5' : ''}`} />
          <span className={`${menuBtn} ${open ? `${menuBtnCenter} -rotate-135` : ''}`} />
        </button>

        <Nav
          obj={navLinks}
          addedNavClass={`transition-all duration-200 ease-in ${open ? 'fixed top-[85px] left-0 w-full h-full bg-white p-6 z-[200] lg:h-auto' : 'hidden lg:static lg:bg-transparent lg:w-auto lg:h-auto'} lg:flex`}
          addedClass={`${open ? 'flex flex-col lg:flex-row' : ''} ${isHome ? 'text-white' : 'text-black'} justify-around gap-5 w-full lg:flex lg:gap-7 xl:gap-12 font-semibold`}
          navigate={() => setOpen(false)}
        />
      </div>
    </header>
  );
}