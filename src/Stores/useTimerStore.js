import {create} from "zustand"

  const useTimerStore=create((set)=>({
    isWork:true,
    isPlay:false,
    secondLeft:0,
    Information:{
        breakMinutes:15,
        workMinutes:45,
    },
    BreaksecondLeft:0,
    setIsWork:(value)=>set({isWork:value}),
    setIsPlay:(value)=>set({isPlay:value}),
    setBreakSecondLeft:(value)=>set({BreaksecondLeft:value}),
    setSecondLeft:(value)=>set({secondLeft:value})
}))
 export default useTimerStore