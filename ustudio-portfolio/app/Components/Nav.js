'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav({obj, addedNavClass, addedClass}){

    const pathname = usePathname();

    return(
        <nav className={addedNavClass}>
            <ul className={addedClass}>
                {obj.map((item) => (
                    <li key={item.linkUrl} className='relative'><Link className={`${pathname === `/${item.linkUrl}` ? 'active' : 'nav-link' }`} href={`/${item.linkUrl}`}>{item.linkName}</Link></li>
                ))}
            </ul>
        </nav>
    )
}