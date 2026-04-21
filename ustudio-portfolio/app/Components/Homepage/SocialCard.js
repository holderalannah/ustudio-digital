import dynamic from 'next/dynamic'

const InstagramEmbed = dynamic(() => import('../InstagramEmbed'), { ssr: false })

export default function SocialCard({ cardSocial }){
    return(
        <div className='group/item h-[450px] overflow-hidden'>
            <div className='mt-[-54px] relative z-10 group/item'>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InstagramEmbed url={cardSocial} width={328} />
                </div>
            </div>
        </div>
    )
}