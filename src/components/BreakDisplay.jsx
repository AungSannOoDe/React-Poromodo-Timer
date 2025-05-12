import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css'
const BreakDisplay = ({breakPercent,breakMin,breakSec}) => {
   
  return (
    <div>
    <CircularProgressbar value={breakPercent} text={`${breakMin}:${breakSec}`} styles={buildStyles({
        textColor:"#dcfce7",
        pathTransitionDuration:0.5,
        pathColor: `rgba(0, 255, 0, 1)`
    })} className='animate__animated  animate__bounceIn  duration-300' />
</div>
  )
}

export default BreakDisplay