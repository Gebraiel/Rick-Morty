import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router'

export default function AppLayout() {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
        
    </>
  )
}
