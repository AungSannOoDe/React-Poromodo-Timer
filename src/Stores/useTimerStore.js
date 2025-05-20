import {create} from "zustand"
import{persist} from "zustand/middleware"
  const useTimerStore=create(
    persist(
      (set)=>({
        personal:[],
        isWork:true,
        isPlay:false,
        secondLeft:0,
        WorkingPercent:0,
        WorkMinutes:0,
        isSettings:false,
        Information:{
          breakMinutes:15,
          workMinutes:55,
         },
        BreaksecondLeft:0,
        updateSettings:(data)=>set(state=>({
          Information:{
            ...state.Information,
            ...data
          }
        })),
        setIsSettings:(value)=>set({isSettings:value}),
        setIsWork:(value)=>set({isWork:value}),
        setIsPlay:(value)=>set({isPlay:value}),
        setBreakSecondLeft:(value)=>set({BreaksecondLeft:value}),
        setSecondLeft:(value)=>set({secondLeft:value})
    }),
    {
      name:"pormodoro-timer-ettings",
      partialize:(state)=>({personal:state.personal})
    }
    )
    )
 export default useTimerStore