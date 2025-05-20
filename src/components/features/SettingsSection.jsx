import React, { useState } from 'react'
import useTimerStore from '../../Stores/useTimerStore';
import { Clock, X, Volume2 } from "lucide-react";
import { useForm } from "react-hook-form";
const SettingsSection = ({handleClose}) => {
    const {  Information, updateSettings } = useTimerStore();
    const[Break,setBreak]=useState(false)
  const[Work,setWork]=useState(false)
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
      const formValues = watch();

      const onSubmit = (data) => {
        updateSettings(data);
        handleClose();
      };
    const handleWorkMinutesChange = (newValue) => {
        const validatedValue = Math.min(60, Math.max(1, newValue));
        setFormValue("workMinutes", validatedValue);
      };
    
      const handleBreakMinutesChange = (newValue) => {
        const validatedValue = Math.min(60, Math.max(1, newValue));
        setFormValue("breakMinutes", validatedValue);
      };
  return (
<form onSubmit={handleSubmit(onSubmit)} >
  <div className="px-4 py-1"  >
        <p className='flex justify-start text-green-100 uppercase gap-1 mt-2 opacity-45'><Clock /> Timer</p>
        <h1 className='text-2xl font-bold text-green-100 mt-2'>Time(minutes)</h1>
            
        <div className='grid grid-cols-10 mt-4'>
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
                // onChange={(e) => {
                //   const val = parseInt(e.target.value) || 0;
                //   if (val >= 1 && val <= 60) {
                //     handleWorkMinutesChange(val);
                //   }
                // }}
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
          <div className="col-span-6 ">
            <section className='flex justify-center gap-x-10 items-center' >
            <div >
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
                        // onChange={(e) => {
                        //   const val = parseInt(e.target.value) || 0;
                        //   if (val >= 1 && val <= 60) {
                        //     handleBreakMinutesChange(val);
                        //   }
                        // }}
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
            </section> 
           
          </div>
        </div>
            
        <div className='mt-2 grid grid-cols-10'>
          <h1 className='text-2xl font-bold text-green-100 col-span-6' >Auto break times</h1>
           <button type='button'  onClick={()=>setBreak(!Break)}  className={` w-[60px] h-[30px]  rounded-[30px] relative  cursor-pointer   transition-colors  duration-300   before:content-[' '] before:w-[22px] before:h-[22px]  before:bg-green-100 before:absolute before:top-[4px] before:left-[4px] before:rounded-[50%] before:transition-transform  before:duration-300   ${Break ? 'bg-green-300 before:translate-x-[30px] ' :' bg-stone-950'} `}></button>
        </div>
            
        <div className='mt-2 grid grid-cols-10'>
          <h1 className='text-2xl font-bold text-green-100 col-span-6'>Auto Start Timer</h1>
          <button type='button'  onClick={()=>setWork(!Work)}  className={` w-[60px] h-[30px]  rounded-[30px] relative  cursor-pointer   transition-colors  duration-300   before:content-[' '] before:w-[22px] before:h-[22px]  before:bg-green-100 before:absolute before:top-[4px] before:left-[4px] before:rounded-[50%] before:transition-transform  before:duration-300   ${Work? 'bg-green-300 before:translate-x-[30px] ' :' bg-stone-950'} `}></button>
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



    </form>  
  )
}

export default SettingsSection