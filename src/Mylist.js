import React from 'react'

export default function Mylist() {
  return (
    <div className='py-[5vh]'>
    <div className='flex items-center justify-between px-[10vh]'>
      <div className='flex items-center justify-center bg-black w-[60vh] rounded-lg h-[60vh]'>
        <div className='flex-col'>
            <div className='flex py-2'>
            <div className='text-black font-sans px-10 bg-slate-400'>Breakfast</div>
            <div>
                <button className='text-white font-sans'>Delete</button>
            </div>
            </div>
            <div className='flex py-2 '>
            <div className='text-black font-sans px-10  bg-slate-400'>Dinner</div>
            <div>
                <button className='text-white font-sans'>Delete</button>
            </div>
            </div>
            <div className='flex py-2'>
            <div className='text-black font-sans px-10  bg-slate-400'>Study</div>
            <div>
                <button className='text-white font-sans'>Delete</button>
            </div>
            </div>
            <div className='flex py-2'>
            <div className='text-black font-sans px-10  bg-slate-400'>Breakfast</div>
            <div>
                <button className='text-white font-sans'>Delete</button>
            </div>
            </div>
        <div className='my-2'>
            <input type='placeholder'></input>
        </div>
        </div>
      </div>
      <div className='flex items-center justify-center bg-black w-[60vh] rounded-lg h-[60vh]'>
        <div className='text-white font-sans px-10'>Breakfast</div>
        <div>
            <button className='text-white font-sans'>Delete</button>
        </div>
      </div>
    </div>
    </div>
  )
}
