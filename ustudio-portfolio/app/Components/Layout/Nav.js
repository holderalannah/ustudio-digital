'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav({obj, addedNavClass, addedClass, linkClasses, navigate}){

    const pathname = usePathname();

    return(
        <nav className={addedNavClass}>
            <ul className={addedClass}>
                {obj.map((item) => (
                    <li key={item.linkUrl}>
                        <Link className={`${pathname === `/${item.linkUrl}` ? 'active' : 'nav-link' } relative draw-border-link no-underline ${linkClasses}`} href={`/${item.linkUrl}`} onNavigate={navigate}>{item.linkName}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}