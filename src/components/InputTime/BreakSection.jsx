import React from 'react'
import useTimerStore from '../Stores/useTimerStore';
import { useState } from 'react';
import {useForm} from "react-hook-form"
const BreakSection = () => {
    const {handleSubmit,register,formState:{
        errors
      }}=useForm()
    const{Information}=useTimerStore()
    const[value,SetValue]=useState(Information.breakMinutes)
  return (
    <div className="relative flex items-center w-32">
        
    <button
      type="button"
      onClick={() => {
       SetValue(Math.max(1,Number(value)-1))
      }}
      className="absolute left-0 h-10 w-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-l-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      disabled={value < 1}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
      </svg>
    </button>
    <input
      type="number"
      {...register("breakminutes", {
        required: "Break Minutes is required",
        min: { value: 1, message: "Minimum 1 minute" },
        max: { value: 60, message: "Maximum 60 minutes" }
      })}
      value={value}
      className="w-full h-10 bg-gray-100 text-center border-y border-gray-300 focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none appearance-none"
    />
    
           
    <button
      type="button"
      onClick={() => {
       SetValue(Math.min(60,Number(value)+1))
      }}
      className="absolute right-0 h-10 w-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-r-md transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      disabled={value > 60}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
      </svg>
    </button>


  </div>
  )
}

export default BreakSection