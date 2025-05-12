import React from 'react'

const BreakButton = ({setIsWork,setIsPlay,isPlayRef,isPlay}) => {
  const Breaking=()=>{
   setIsWork(false)
   setIsPlay(!isPlay)
   isPlayRef.current=!isPlay
  }
  return (
    <button onClick={()=>Breaking()} className='border  border-green-100 px-4 py-2 rounded-3xl text-green-100 focus:border-0 focus:bg-green-100 focus:text-gray-700 '>Break Button</button>
  )
}

export default BreakButton