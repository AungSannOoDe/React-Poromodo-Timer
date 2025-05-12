
import './App.css'
import Timer from "./components/Timer"
import TimerSettings from './components/TimerSettings'
function App() {
  

  return (
   <>
   <section className=' bg-gradient-to-r from-[#141e30] to-[#243b55] opacity-90 w-full h-screen  flex justify-center '>
    <div className=' lg:mt-30 md:mt-10 mt-4'>
    <TimerSettings/>
    <Timer/>
    </div>
   
   </section>
   
   </>
  )
}

export default App
