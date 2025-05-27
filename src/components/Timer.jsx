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
  const {
    secondLeft,
    BreaksecondLeft,
    isWork,
    setIsPlay,
    isPlay,
    setIsWork,
    setBreakSecondLeft,
    setSecondLeft,
    Information
  } = useTimerStore()

  const playRingtones = () => {
    const audio = new Audio(Information.workAlarm.songUrl);
    audio.volume = Information.workAlarm.volume;
    audio.play().then(
      setTimeout(() => {
        audio.pause()
        audio.currentTime = 0
      }, 8000)
    ).catch(e => console.log("play failed", e))
  }

  const secondLefRef = useRef(secondLeft)
  const BreakSecRef = useRef(BreaksecondLeft)
  const isPlayRef = useRef(isPlay)
  const intervalRef = useRef(null)
  const breakIntervalRef = useRef(null)

  useEffect(() => {
    secondLefRef.current = Information.workMinutes * 60;
    BreakSecRef.current = Information.breakMinutes * 60
    setBreakSecondLeft(BreakSecRef.current)
    setSecondLeft(secondLefRef.current)
    
    return () => {
      intervalRef.current && clearInterval(intervalRef.current)
      breakIntervalRef.current && clearInterval(breakIntervalRef.current)
    }
  }, [Information])

  useEffect(() => {
    intervalRef.current && clearInterval(intervalRef.current)
    breakIntervalRef.current && clearInterval(breakIntervalRef.current)
    if (isPlay) {
      if (isWork) {
        intervalRef.current = setInterval(() => {
          secondLefRef.current--;
          setSecondLeft(secondLefRef.current)
          
          if (secondLefRef.current <= 0) {
            setIsWork(false)
            setIsPlay(true)
           
            clearInterval(intervalRef.current)
          }
        }, 1000)
      } else {
        breakIntervalRef.current = setInterval(() => {
          BreakSecRef.current--;
          setBreakSecondLeft(BreakSecRef.current)
          
          if (BreakSecRef.current <= 0) {
            setIsPlay(false)
            playRingtones()
            clearInterval(breakIntervalRef.current)
          }
        }, 1000)
      }
    }
  }, [isPlay, isWork, Information])

  return (
    <section>
      <div className='flex justify-center gap-x-4'>
        <WorkButton isPlayRef={isPlayRef} />
        <BreakButton setIsWork={setIsWork} isWork={isWork} isPlay={isPlay} setIsPlay={setIsPlay} isPlayRef={isPlayRef} />
      </div>
      <div className='mt-5 flex justify-between gap-5 mb-5'>
        {isWork ? <WorkDisplay /> : <BreakDisplay />}
      </div>
      <div className='flex justify-center'>
        {isPlay ? <PlayButton isPlayRef={isPlayRef} /> : <PauseButton className="me-4" isPlayRef={isPlayRef} />}
      </div>
      <div className='flex justify-center mt-3'>
        <Tasks />
      </div>
    </section>
  )
}

export default Timer