import Link from 'next/link';

export default function Nav({obj, addedClass}){
    return(
        <nav>
            <ul className={addedClass}>
                {obj.map((item) => (
                    <li key={item.linkUrl}><Link href={`/${item.linkUrl}`}>{item.linkName}</Link></li>
                ))}
            </ul>
        </nav>
    )
}