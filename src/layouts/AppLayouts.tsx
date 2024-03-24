import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayouts = () => {
  return (
    <main className='w-full h-screen relative lg:static lg:bg-Dark-Slate-Grey  flex lg:items-center lg:justify-center'><Outlet/></main>
  )
}

export default AppLayouts