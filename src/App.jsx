
import './App.css'
import Timer from "./components/Timer"
import TimerSettings from './components/Timerprofile'
import ChangeLanguage from './components/ChangeLanguage'
import SettingsButton from './components/SettingsButton'
import TimerProfile from './components/Timerprofile'
import AddFloating from './components/AddFloating'
import useTimerStore from './Stores/useTimerStore'
function App() {
  const{isSettings}=useTimerStore();

//   const audio=new Audio('/ringtones/alarm_sound.mp3')
//   useEffect(()=>{
//    setInterval(()=>{
//       audio.volume=1;
//       audio.play().catch(e=>console.log("play failed",e))
//      },2000) 
//   },[])
//   console.log(audio.volume);
  return (
   <>
   <section className='bg-gradient-to-r from-[#141e30] to-[#243b55] opacity-90 w-full h-screen  -z-40 '>
      {isSettings &&  <AddFloating/>}  
   <div className='p-3 grid grid-cols-12'>
   <TimerProfile />
   <ChangeLanguage  />
      </div>
   <section className='    flex justify-center '>
      <div className=' lg:mt-30 md:mt-10 mt-0'>
      <Timer/>
      </div>
     </section>
   </section>
  
   
   </>
  )
}

export default App
