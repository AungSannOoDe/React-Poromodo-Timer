import React from 'react'
import { useTranslation } from 'react-i18next'
import useTimerStore from '../Stores/useTimerStore'
const WorkButton = ({isPlayRef}) => {
  const{BreaksecondLeft,
   setIsPlay,
    isPlay,setIsWork
    ,Information}=useTimerStore()
  const {t}=useTranslation()
  const Working=()=>{
    setIsWork(true)
    setIsPlay(!isPlay)
    isPlayRef.current=!isPlay
  }
  return (
    <button  onClick={()=>Working()} className='border  border-green-100 px-4 py-2 rounded-3xl text-green-100  focus:border-0 focus:bg-green-100 focus:text-gray-700 '>{t('work')}</button>
  )
}

export default WorkButton