'use client'

type Props = {
  url: string,
}

export default function VideoIframe({ url }:Props) {
  return (
    <div className="w-full aspect-video">
        <iframe className="w-full aspect-video" src={url} allow="autoplay; clipboard-write; encrypted-media; web-share" allowFullScreen></iframe>
    </div>
  )
}
