import React from 'react';
import { Clock, X, Volume2 } from "lucide-react";
import 'animate.css';
import useTimerStore from '../Stores/useTimerStore';
import { useForm } from "react-hook-form";

const AddFloating = () => { 
  const { isSettings, setIsSettings, Information, updateSettings } = useTimerStore();
  const { 
    handleSubmit,
    register,
    setValue: setFormValue,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: {
      breakMinutes: Information.breakMinutes,
      workMinutes: Information.workMinutes
    }
  });

  const [isClosing, setIsClosing] = React.useState(false);
  
  // Watch form values
  const formValues = watch();

  const onSubmit = (data) => {
    updateSettings(data);
    handleClose();
  };

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

  // Handle increment/decrement for work minutes
  const handleWorkMinutesChange = (newValue) => {
    const validatedValue = Math.min(60, Math.max(1, newValue));
    setFormValue("workMinutes", validatedValue);
  };

  // Handle increment/decrement for break minutes
  const handleBreakMinutesChange = (newValue) => {
    const validatedValue = Math.min(60, Math.max(1, newValue));
    setFormValue("breakMinutes", validatedValue);
  };

  if (!isSettings && !isClosing) return null;

  return (
    <section className={`animate__animated ${!isClosing ? 'animate__slideInDown' : 'animate__slideOutDown'} inset-0 duration-300 fixed w-full bg-black opacity-90 h-screen z-50`}>
      <form className='flex justify-center items-center h-screen' onSubmit={handleSubmit(onSubmit)}>
        <div className="w-[500px] h-[450px] shadow-lg bg-stone-700 rounded-lg overflow-y-scroll">
          <div className='border-b border-green-100 py-3 grid grid-cols-12'>
            <p className='text-end text-green-100 col-span-7 font-bold text-lg'>Settings</p>
            <div className='col-span-5 flex justify-end me-2'>
              <button type="button" onClick={handleSettings}>
                <X className='text-green-100' />
              </button>
            </div>
          </div>
          
          <div className="px-4 py-1">
            <p className='flex justify-start text-green-100 uppercase gap-1 mt-2 opacity-45'><Clock /> Timer</p>
            <h1 className='text-2xl font-bold text-green-100 mt-2'>Time(minutes)</h1>
            
            <div className='grid grid-cols-8 mt-4'>
              <div className="col-span-4">
                <p className='text-green-100'>Working times</p>
                <div className="relative flex items-center w-32">
                  <button
                    type="button"
                    onClick={() => handleWorkMinutesChange(formValues.workMinutes - 1)}
                    className="absolute left-0 h-10 w-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-l-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={formValues.workMinutes <= 1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  
                  <input
                    type="number"
                    {...register("workMinutes", {
                      required: "Work Minutes is required",
                      min: { value: 1, message: "Minimum 1 minute" },
                      max: { value: 60, message: "Maximum 60 minutes" }
                    })}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 0;
                      if (val >= 1 && val <= 60) {
                        handleWorkMinutesChange(val);
                      }
                    }}
                    className="w-full h-10 bg-gray-100 text-center border-y border-gray-300 focus:ring-1 focus:ring-green-500 outline-none appearance-none"
                  />
                  
                  <button
                    type="button"
                    onClick={() => handleWorkMinutesChange(formValues.workMinutes + 1)}
                    className="absolute right-0 h-10 w-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-r-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={formValues.workMinutes >= 60}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                {errors.workMinutes && <p className='text-sm text-red-500'>{errors.workMinutes.message}</p>}
              </div>
              
              <div className="col-span-4">
                <p className='text-green-100'>Breaking time</p>
                <div className="relative flex items-center w-32">
                  <button
                    type="button"
                    onClick={() => handleBreakMinutesChange(formValues.breakMinutes - 1)}
                    className="absolute left-0 h-10 w-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-l-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={formValues.breakMinutes <= 1}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                  </button>
                  
                  <input
                    type="number"
                    {...register("breakMinutes", {
                      required: "Break Minutes is required",
                      min: { value: 1, message: "Minimum 1 minute" },
                      max: { value: 60, message: "Maximum 60 minutes" }
                    })}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 0;
                      if (val >= 1 && val <= 60) {
                        handleBreakMinutesChange(val);
                      }
                    }}
                    className="w-full h-10 bg-gray-100 text-center border-y border-gray-300 focus:ring-1 focus:ring-green-500 outline-none appearance-none"
                  />
                  
                  <button
                    type="button"
                    onClick={() => handleBreakMinutesChange(formValues.breakMinutes + 1)}
                    className="absolute right-0 h-10 w-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-r-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={formValues.breakMinutes >= 60}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
                {errors.breakMinutes && <p className='text-sm text-red-500'>{errors.breakMinutes.message}</p>}
              </div>
            </div>
            
            <div className='mt-2'>
              <h1 className='text-2xl font-bold text-green-100'>Auto break times</h1>
            </div>
            
            <div className='mt-2'>
              <h1 className='text-2xl font-bold text-green-100'>Auto Start Timer</h1>
            </div>
          </div>
          
          <div className="border border-gray-400 w-11/12 mx-auto mb-2 mt-2"></div>
          
          <section className='px-4 py-1'>
            <p className='flex justify-start text-green-100 uppercase gap-1 mt-2 opacity-45'><Volume2 /> Timer</p>
            <div className="flex justify-between">
              <p className='text-3xl text-green-100'>Alarm</p>
              <p>Alarm</p>
            </div>
          </section>
          
          <div className='flex justify-end me-2'>
            <button type="submit" className='border border-green-100 text-green-100 px-5 text-2xl py-1 hover:bg-green-100 hover:text-stone-700 transition-colors'>
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddFloating;