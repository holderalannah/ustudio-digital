export default function AboutBox({ imgIcon, heading, content }) {
    return (
        <div className='flex items-start gap-5 py-8 first:pt-0 last:pb-0 md:px-10 md:py-0 md:first:pb-14 md:pb-5 md:last:pr-0'>
            <div className='flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-unilever/90'>
                {imgIcon != '' ? imgIcon : ''}
            </div>
            <div>
                <h3 className='mb-2 text-lg font-semibold'>{heading}</h3>
                <p className='text-[15px] leading-[1.6]'>{content}</p>
            </div>
        </div>
    )
}