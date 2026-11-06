import React from 'react'

export default function Logo() {
  return (
    <div className='flex items-center gap-2 '>
        <img src="/icon.png" alt="Rick And Morty Icon" className='w-10'/>
        <p className='font-freaky capitalize text-xl text-primary'>Rick And Morty <span className='text-white'>explorer</span></p>
    </div>
  )
}
