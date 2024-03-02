import React from 'react'

export default function Mylist() {
  return (
    <div className='py-[5vh]'>
    <div className='flex items-center justify-between px-[10vh]'>
      <div className='flex items-center justify-center bg-black w-[60vh] rounded-lg h-[80vh]'>
        <div className='flex-col'>
            <div className='flex  justify-between py-2 '>
            <div className='text-black font-sans px-20 w-25 bg-slate-400 rounded-2xl'>Breakfast</div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 rounded font-sans'>Delete</button>
            </div>
            </div>
            <div className='flex justify-between py-2 '>
            <div className='text-black font-sans px-20 w-25  bg-slate-400 rounded-2xl'>Dinner</div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 rounded font-sans'>Delete</button>
            </div>
            </div>
            <div className='flex justify-between py-2'>
            <div className='text-black font-sans px-20 w-25  bg-slate-400 rounded-2xl'>Study</div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 rounded font-sans'>Delete</button>
            </div>
            </div>
            <div className='flex justify-between py-2'>
            <div className='text-black font-sans px-20 w-25  bg-slate-400 rounded-2xl'>Breakfast</div>
            <div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold w-20 py-2 rounded font-sans'>Delete</button>
            </div>
            
            </div>
        <div className='flex justify-between py-2 px-2 mt-[30vh]'>
        <div className=' px-10'>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task" type="text" placeholder="New task"></input>
        </div>
        <div>
                <button className='bg-slate-500 hover:bg-blue-300 text-white font-bold w-20 py-2 rounded font-sans'>Add</button>
            </div>
        </div>
        </div>
      </div>
      <div className='flex items-center justify-center bg-black w-[60vh] rounded-lg h-[80vh]'>
        <div className='text-white font-sans px-10'>Breakfast</div>
        <div>
            <button className='text-white font-sans btn-close'>Delete</button>
        </div>
      </div>
    </div>
    </div>
  )
}
