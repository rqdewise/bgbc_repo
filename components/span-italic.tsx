import React from 'react'

type Props = {
  children: React.ReactNode
}
const SpanItalic:React.FC<Props> = ({children}) => {
  return (
    <span className=' italic text-sky-700 font-medium'>
      {children}
    </span>
  )
}

export default SpanItalic