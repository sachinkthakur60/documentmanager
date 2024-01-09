import React from 'react';
import { FaRegFileAlt } from "react-icons/fa"
import {LuDownload} from "react-icons/lu";
import {IoClose} from "react-icons/io5"
import {motion} from "framer-motion";

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className='relative w-60 h-72 rounded-[40px] bg-zinc-900/90 text-white p-5 overflow-hidden'>
      <FaRegFileAlt/>
      <p className='mt-5 leading-tight text-sm font-medium'>{data.description}</p>
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
          <h5>{data.fileSize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.isClose? <IoClose/> : <LuDownload size=".7em" color='#fff'/>}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card