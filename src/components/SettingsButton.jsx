import React from 'react'
import { Settings } from 'lucide-react';
import useTimerStore from '../Stores/useTimerStore';

const SettingsButton = () => {
 const {isSettings,setIsSettings}=useTimerStore()
  const handleSettings=()=>{
    setIsSettings(!isSettings)
  }
  return (
   <button onClick={handleSettings} className='text-md border border-green-100 px-2 py-1  mt-3 rounded-lg text-green-100'>
    <Settings size={40} />
   </button>
  )
}

export default SettingsButton