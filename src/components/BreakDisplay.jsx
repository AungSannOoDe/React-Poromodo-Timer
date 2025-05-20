import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css'
import useTimerStore from '../Stores/useTimerStore';
const BreakDisplay = () => {
  const{BreaksecondLeft
    ,Information}=useTimerStore()
    const getTotalBreakSeconds = () => Information.breakMinutes * 60;
  
    const getBreakPercent = () => Math.round(BreaksecondLeft / getTotalBreakSeconds() * 100);
    
    
    const getBreakMinutes = () => Math.floor(BreaksecondLeft / 60);
    
    
    const getBreakSeconds = () => {
      const seconds = BreaksecondLeft % 60;
      return seconds < 10 ? `0${seconds}` : seconds.toString();
    };
  return (
    <div>
    <CircularProgressbar value={getBreakPercent()} text={`${getBreakMinutes()}:${getBreakSeconds()}`} styles={buildStyles({
        textColor:"#dcfce7",
        pathTransitionDuration:0.5,
        pathColor: `rgba(0, 255, 0, 1)`
    })} className='animate__animated  animate__bounceIn  duration-300' />
</div>
  )
}

export default BreakDisplay