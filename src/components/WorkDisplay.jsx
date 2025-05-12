import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import 'animate.css'
const WorkDisplay = ({percentage,minutes,seconds}) => {
  return (
    <div>
        <CircularProgressbar value={percentage} text={`${minutes}:${seconds}`} styles={buildStyles({
            textColor:"#dcfce7",
            pathTransitionDuration:0.5,
            pathColor: `rgba(255, 0, 0, 1)`
        })} className='animate__animated  animate__bounceIn duration-300'  />
    </div>
  )
}

export default WorkDisplay