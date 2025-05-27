import React from 'react'
import { Plus } from 'lucide-react'
const Tasks = () => {
   
  return (
    <section className='flex gap-1'>
        <input type="text" placeholder='Enter Task...' className='border-b-2  border-green-100 h-10 placeholder:text-green-100 outline-0 border-0 text-green-100' />
        <div className='py-1'>
        <button className='border text-md border-green-100 text-green-100 hover:bg-green-100 transition-all hover:border-0 hover:text-gray-700 '><Plus size={35} /></button>
        </div>
        
    </section>
  )
}

export default Tasks