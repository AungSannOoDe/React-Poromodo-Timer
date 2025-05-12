import React from 'react'
import { Settings } from 'lucide-react'
const SettingsButton = () => {
  return (
   <button className='text-2xl border border-green-100 px-2 py-1  rounded-lg'>
    <div className='flex justify-center gap-3 text-white '>
    <Settings size={50} /><p className='font-xl self-center'>Settings</p> 
    </div>
   </button>
  )
}

export default SettingsButton