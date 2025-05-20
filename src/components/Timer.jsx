import React, { useEffect, useRef } from 'react'
import WorkButton from "./WorkButton"
import BreakButton from "./BreakButton"
import BreakDisplay from "./BreakDisplay"
import WorkDisplay from "./WorkDisplay"
import PauseButton from "./PauseButton"
import PlayButton from './PlayButton'
import SettingsButton from './SettingsButton'
import useTimerStore from '../Stores/useTimerStore'
import ChangeLanguage from './ChangeLanguage'
import Tasks from './Tasks'
import AddFloating from './AddFloating'

const Timer = () => {
   
 const{secondLeft,BreaksecondLeft,
  isWork,setIsPlay,
  isPlay,setIsWork
  ,setBreakSecondLeft
  ,setSecondLeft
  ,Information}=useTimerStore()
  console.log(Information);
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
   
   
  return (
   <section>
   
   
    <div className='flex justify-center gap-x-4'>
      
    <WorkButton   isPlayRef={isPlayRef} />
    <BreakButton setIsWork={setIsWork} isWork={isWork} isPlay={isPlay} setIsPlay={setIsPlay} isPlayRef={isPlayRef}/>
    </div>
    <div className='mt-5 flex justify-between gap-5 mb-5'>
      {  isWork ? <WorkDisplay   /> :<BreakDisplay    />  }
  
    </div>
    < div className='flex justify-center' >
    {
      isPlay ? <PlayButton  isPlayRef={isPlayRef}/> :  <PauseButton className="me-4"  isPlayRef={isPlayRef} />
    }
    </div>
    <div className='flex justify-center mt-3'>
     <Tasks/>
    </div>
      
   </section>
  )
}

export default Timer