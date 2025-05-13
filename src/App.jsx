
import './App.css'
import Timer from "./components/Timer"
import TimerSettings from './components/TimerSettings'
import ChangeLanguage from './components/ChangeLanguage'
function App() {
  

  return (
   <>
   <section className='bg-gradient-to-r from-[#141e30] to-[#243b55] opacity-90 w-full h-screen'>
   <div className='flex justify-end me-10 '>
   <ChangeLanguage/>
      </div>
   
   <section className='    flex justify-center '>
      <div className=' lg:mt-30 md:mt-10 mt-4'>
      
      <TimerSettings/>
      <Timer/>
      </div>
   
     </section>
   </section>
  
   
   </>
  )
}

export default App
