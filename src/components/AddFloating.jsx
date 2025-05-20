import React from 'react';
import { Clock, X, Volume2 } from "lucide-react";
import 'animate.css';
import useTimerStore from '../Stores/useTimerStore';
import SettingsSection from './features/SettingsSection';
const AddFloating = () => { 
  const { isSettings, setIsSettings, Information} = useTimerStore();
  const [isClosing, setIsClosing] = React.useState(false);
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsSettings(false);
      setIsClosing(false);
    }, 500);
  };
  const handleSettings = () => {
    isSettings ? handleClose() : setIsSettings(true);
  }; 
  if (!isSettings && !isClosing) return null;

  return (
    <section className={`animate__animated ${!isClosing ? 'animate__slideInDown' : 'animate__slideOutDown'} inset-0 duration-300 fixed w-full bg-black opacity-90 h-screen z-50`}>
      <div className='flex justify-center items-center h-screen' >
        <div className="w-[500px] h-[450px] shadow-lg bg-stone-700 rounded-lg overflow-y-scroll">
          <div className='border-b border-green-100 py-3 grid grid-cols-12'>
            <p className='text-end text-green-100 col-span-7 font-bold text-lg'>Settings</p>
            <div className='col-span-5 flex justify-end me-2'>
              <button type="button" onClick={handleSettings}>
                <X className='text-green-100' />
              </button>
            </div>
          </div>   
          <SettingsSection handleClose={handleClose }/>
        </div>
      </div>
    </section>
  );
};

export default AddFloating;