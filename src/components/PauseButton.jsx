import { Pause } from 'lucide-react'
import React from 'react'
import useTimerStore from '../Stores/useTimerStore'
const PauseButton = ({isPlayRef}) => {
  const{BreaksecondLeft,
    setIsPlay,
     isPlay,Information}=useTimerStore()
  const Pausing=()=>{
    setIsPlay(!isPlay)
    isPlayRef.current=!isPlay
  }
  return (
    <button onClick={Pausing} className='border border-green-100 px-2 py-1  text-green-100 active:scale-95 hover:bg-green-100 hover:border-0 transition-all duration-300 hover:text-gray-700'>
    <Pause  size={40}/>
  </button>
  )
}

export default PauseButton