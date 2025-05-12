import React from 'react'
import {Play} from "lucide-react"
const PlayButton = ({setIsPlay,isPlay,isPlayRef}) => {
  
  const playing=()=>{
    setIsPlay(!isPlay)
    isPlayRef.current=!isPlay
  }
 
  return (
    <button onClick={playing} className='border border-green-100 px-2 py-1 text-green-100 active:scale-95 hover:bg-green-100 hover:border-0 transition-all duration-300 hover:text-gray-700'>
       <Play  size={60}/>
    </button>
  )
}

export default PlayButton