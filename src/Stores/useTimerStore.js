import {create} from "zustand"
import{persist} from "zustand/middleware"
  const useTimerStore=create(
    persist(
      (set)=>({
        personal:[],
         ringtones:[
          {songName: "Alarm Clock",songurl:"/ringtones/alarm_clock.mp3"},
          {songName:" Alarm Sound",songurl:"/ringtones/alarm_sound.mp3"},
          {songName:" Alarm Tone",songurl:"/ringtones/marimba_tones.mp3"},
          {songName:"Realme tones",songurl:"/ringtones/realme_tune.mp3"},
          {songName:"morning Glory",songurl:"/ringtones/morning_glory.mp3"},
          {songName:"stars",songurl:"ringtones/stars.mp3"}
       ],
        isWork:true,
        isPlay:false,
        secondLeft:0,
        WorkingPercent:0,
        WorkMinutes:0,
        isSettings:false,
        Information:{
          breakMinutes:15,
          workMinutes:55,
          workAlarm:{
               songName:"Alarm Sound",
              songUrl:"/ringtones/alarm_sound.mp3",
              volume:0.4
          }

         },
        BreaksecondLeft:0,
        updateSettings:(data)=>
          set(state=>({
          Information:{
            ...state.Information,
            ...data,
            workAlarm: {
              ...state.Information.workAlarm,
              ...data.workAlarm
            }
          }
        })
      ),
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