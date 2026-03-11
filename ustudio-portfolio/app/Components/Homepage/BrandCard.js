import Image from "next/image";
import Link from 'next/link';

export default function BrandCard({ data = [], gap = '1rem' }) {
  // Duplicate the array so we can translate by -50% for an infinite effect
  const items = [...data, ...data];

  function isOdd(number) {
    return number % 2 !== 0;
  }
  return (
    <div className="w-full">
      {/* Set gap via CSS custom property (can also be set inline if you prefer) */}
      <ul
        className="brand-card-list marquee__inner"
        style={{ '--marquee-gap': gap }}
        aria-hidden={data.length === 0 ? true : undefined}
      >
        {items.map((card, index) => {
          const isDuplicate = index >= data.length;
          return (
            <li
              key={`brand-${card.brandName}-${index}`}
              className="marquee__item"
              aria-hidden={isDuplicate ? true : undefined} // don't announce duplicates to screen readers
            >
              <div
                className={`brand-card bg-gray-50 rounded-4xl flex justify-center items-center w-[11.6vw] h-[11.6vw] shadow-xl ${isOdd(index) ? 'rotate-2' : '-rotate-3'}`}
              >
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-115"
                  href={card.brandUrl}
                >
                  <Image
                    src={card.brandImg}
                    alt={`${card.brandName} logo`}
                    className="max-w-[120px]"
                    loading="eager"
                  />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}