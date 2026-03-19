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

  const [ open, setOpen ] = useState(false);
  const [ isHome, setIsHome ] = useState( pathname === '/' );
  const [ scrolledPastHero, setScrolledPastHero ] = useState( pathname!== '/' );


  const navLinks = [
    { linkName: 'About Us', linkUrl: 'about-us' },
    { linkName: 'Our Work', linkUrl: 'work' },
  ];

  const menuBtn = 'block bg-darkPink h-0.5 w-5 rounded transition duration-200 ease-in-out';
  const menuBtnCenter = 'absolute inset-0 m-auto';

  // update isHome when the route changes
  useEffect(() => {
    setIsHome(pathname === '/');
  }, [pathname]);

  // manage body class for menu overflow and add/remove resize listener
  useEffect(() => {
    if ( typeof window === 'undefined' ) return;

    const handler = (e) => {
      const past = !!(e && e.detail && e.detail.past);
      setScrolledPastHero(past);
    }

    window.addEventListener('heroScrolled', handler);

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

    return()=> window.removeEventListener('heroScrolled', handler);
  }, [open]);

  const toggleMenu = (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    setOpen((prev) => !prev);
  };

  const checkLogoState = () => {
    if ( isHome && !scrolledPastHero){
      return WhiteLogo
    } else if ( isHome && scrolledPastHero ) {
      return SiteLogo
    } else if ( !isHome) {
      return SiteLogo
    }
  }

  return (
    <header id="header" className={`
      ${isHome ? 'bg-transparent' : 'bg-white shadow-lg'} 
      ${scrolledPastHero ? 'bg-white! shadow-lg' : 'bg-transparent'} 
      w-full transition ease-in-out duration-300 fixed z-50 top-0`
    }>
      <div className="flex mx-auto w-[90%] max-w-6xl justify-between items-center relative lg:justify-between xl:max-w-7xl">
        <div id="logo" className="p-3.5">
          <Link href="/">
            <Image className="max-w-[173px] md:max-w-[220px] transition-all" src={checkLogoState()} alt="U-Studio Logo" />
          </Link>
        </div>

        <button
          aria-label="Menu"
          className="w-10 h-10 rounded-xl cursor-pointer flex flex-col justify-center items-center gap-1 bg-white relative lg:hidden"
          onClick={toggleMenu}
        >
          <span className={`${menuBtn} ${open ? `${menuBtnCenter} rotate-135` : ''}`} />
          <span className={`${menuBtn} transition-opacity duration-150 ${open ? 'opacity-0 -translate-y-1.5' : ''}`} />
          <span className={`${menuBtn} ${open ? `${menuBtnCenter} -rotate-135` : ''}`} />
        </button>

        <Nav
          obj={navLinks}
          addedNavClass={`transition-all duration-200 ease-in ${open ? 'fixed top-[85px] left-0 w-full h-[15vh] bg-darkPurple p-6 z-[200] lg:h-auto' : 'hidden lg:static lg:bg-transparent lg:w-auto lg:h-auto'} lg:flex`}
          addedClass={`${open ? 'flex flex-col lg:flex-row' : ''} ${isHome ? 'text-white' : 'text-black!'} ${scrolledPastHero && isHome ? 'text-black!' : 'lg:text-white'} justify-around gap-5 w-full lg:flex lg:gap-7 xl:gap-12 font-semibold `}
          navigate={() => setOpen(false)}
          linkClasses={`${isHome && !scrolledPastHero && 'after:bg-white!'} ${scrolledPastHero && isHome ? 'after:bg-darkPink transition delay-150 duration-300 ease-in-out' : ''}`}
        />
      </div>
    </header>
  );
}