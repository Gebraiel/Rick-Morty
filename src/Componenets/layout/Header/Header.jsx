import React from 'react'
import Logo from './Logo'
import Nav from './Nav'
import ModeToggle from '../../ui/ModeToggle'

export default function Header() {
  return (
    <header>
        <div className='container py-7 grid lg:grid-cols-3 grid-cols-[1fr_auto] items-center'>
            <Logo/>
            <Nav/>
            <div className='lg:block hidden'><ModeToggle/></div>
        </div>
    </header>
  )
}
