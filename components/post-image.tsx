import Image from 'next/image'
import React from 'react'

type Props = {
  image: string,
  size?: string,
  wrap?: boolean,
  caption?: string,
}
const PostImage:React.FC<Props> = ({image,size,wrap,caption}) => {
  return (
    
  <figure className="max-w-sm mt-7 mx-auto">
    <div className="relative h-56">
      <Image 
        className="object-cover"
        fill 
        src={image}
        alt="image description"
      />
    </div>
    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
      {caption}
    </figcaption>
  </figure>

  )
}

export default PostImage