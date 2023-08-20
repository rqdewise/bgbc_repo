type Props = {
    url: string
}

export default function Iframes( { url }: Props) {
  return (
    <div className="relative w-full h-80 my-10 shadow-md">
        <iframe className="w-full h-80 absolute left-0 top-0" src={url} width="1280" height="600" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}
