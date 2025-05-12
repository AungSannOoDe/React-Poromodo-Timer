import React, { useEffect, useRef } from 'react'
import WorkButton from "./WorkButton"
import BreakButton from "./BreakButton"
import BreakDisplay from "./BreakDisplay"
import WorkDisplay from "./WorkDisplay"
import PauseButton from "./PauseButton"
import PlayButton from './PlayButton'
import SettingsButton from './SettingsButton'
import useTimerStore from '../Stores/useTimerStore'

const Timer = () => {
 const{secondLeft,BreaksecondLeft,
  isWork,setIsPlay,
  isPlay,setIsWork
  ,setBreakSecondLeft
  ,setSecondLeft
  ,Information}=useTimerStore()
  const secondLefRef=useRef(secondLeft)
  const BreakSecRef=useRef(BreaksecondLeft)
  const isPlayRef=useRef(isPlay)
  const tick=()=>{
    secondLefRef.current--;
    BreakSecRef.current--;
    setBreakSecondLeft(BreakSecRef.current)
    setSecondLeft(secondLefRef.current)
  }
   useEffect(()=>{
    secondLefRef.current=Information.workMinutes*60;
    BreakSecRef.current=Information.breakMinutes*60
    setBreakSecondLeft(BreakSecRef.current)
    setSecondLeft(secondLefRef.current)
    const  interval=setInterval(()=>{
      isPlayRef.current===true && tick()
    },1000)
    return () =>clearInterval(interval)
   },[Information])
   const TotBreakSec=Information.breakMinutes*60;
   const breakPercent=Math.round(BreaksecondLeft/TotBreakSec*100)
    const breakMin=Math.floor(BreaksecondLeft/60)
    let  breakSec=BreaksecondLeft%60
    breakSec <10 ? breakSec='0'+breakSec:breakSec
   const totalSeconds=Information.workMinutes*60
   const percentage=Math.round(secondLeft/totalSeconds *100)
   const minutes=Math.floor(secondLeft/60);
   let  seconds=secondLeft%60;
  seconds<10 ?  seconds='0'+seconds :seconds
  return (
   <section>
    <div className='flex justify-center gap-x-4'>
    <WorkButton  setIsWork={setIsWork} isWork={isWork} isPlay={isPlay} setIsPlay={setIsPlay} isPlayRef={isPlayRef} />
    <BreakButton setIsWork={setIsWork} isWork={isWork} isPlay={isPlay} setIsPlay={setIsPlay} isPlayRef={isPlayRef}/>
    </div>
    <div className='mt-5 flex justify-between gap-5 mb-5'>
      {  isWork ? <WorkDisplay percentage={percentage} minutes={minutes} seconds={seconds}  /> :<BreakDisplay breakPercent={breakPercent} breakMin={breakMin}  breakSec={breakSec}  />  }
  
    </div>
    < div className='flex justify-center' >
    {
      isPlay ? <PlayButton isPlay={isPlay} setIsPlay={setIsPlay} isPlayRef={isPlayRef}/> :  <PauseButton className="me-4" isPlay={isPlay} setIsPlay={setIsPlay} isPlayRef={isPlayRef} />
    }
    </div>
    <div className='flex justify-center mt-3'>
    <SettingsButton/>
    </div>
      
   </section>
  )
}

export default Timer