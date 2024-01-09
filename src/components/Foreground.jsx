import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
  const ref = useRef(null)
  const data=[
    {
      description:"This is a demo description",
      fileSize:".9mb",
      isClose: true,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"green"
      }
    },
    {
      description:"This is a demo description",
      fileSize:".9mb",
      isClose: false,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"blue"
      }
    },
    {
      description:"This is a demo description",
      fileSize:".9mb",
      isClose: false,
      tag:{
        isOpen:false,
        tagTitle:"Download Now",
        tagColor:"green"
      }
    },
    {
      description:"This is a demo description",
      fileSize:".9mb",
      isClose: false,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"blue"
      }
    },

  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full gap-5 flex flex-wrap p-10'>
      {data.map((item, index)=>(
        <Card data={item} reference={ref} />
      ))}
    </div>
  )
}

export default Foreground