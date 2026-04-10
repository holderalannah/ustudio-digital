import { useEffect } from 'react'
import Script from 'next/script'

export default function InstagramEmbed({ url, captioned = false, maxWidth = 540 }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process()
    }
  }, [url])

  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-captioned={captioned ? '' : undefined}
        data-instgrm-version="14"
        style={{
          background: '#FFF',
          border: 0,
          borderRadius: 3,
          margin: '1px',
          maxWidth: `${maxWidth}px`,
          padding: 0,
          width: '100%',
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
      </blockquote>

      {/* loads the Instagram embed script client-side (only once) */}
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </>
  )
}