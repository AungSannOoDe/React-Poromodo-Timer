import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useTimerStore from '../Stores/useTimerStore';
import 'animate.css'
const WorkDisplay = () => {
  const{secondLeft
    ,Information}=useTimerStore()
 
  const totalSeconds=()=>Information.workMinutes*60
   const percentage=()=>Math.round(secondLeft/totalSeconds() *100)
   const minutes=()=>Math.floor(secondLeft/60);
   const seconds=()=>{
    const seconds=secondLeft%60;
    return seconds<10 ? `0${seconds}` : seconds.toString();
   }
   
  return (
    <div>
        <CircularProgressbar value={percentage()} text={`${minutes()}:${seconds()}`} styles={buildStyles({
            textColor:"#dcfce7",
            pathTransitionDuration:0.5,
            pathColor: `rgba(255, 0, 0, 1)`
        })} className='animate__animated  animate__bounceIn duration-300'  />
    </div>
  )
}

export default WorkDisplay