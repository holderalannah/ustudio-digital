import Link from 'next/link';

export default function Nav({obj, addedNavClass, addedClass}){
    return(
        <nav className={addedNavClass}>
            <ul className={addedClass}>
                {obj.map((item) => (
                    <li key={item.linkUrl}><Link href={`/${item.linkUrl}`}>{item.linkName}</Link></li>
                ))}
            </ul>
        </nav>
    )
}