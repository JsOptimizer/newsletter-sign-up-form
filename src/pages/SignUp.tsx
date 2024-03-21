import React from 'react'
import { SignupDetail } from '../components'

const SignUp = () => {
  return (
    <section className='sm:bg-Dark-Slate-Grey h-[100dvh] flex sm:items-center sm:justify-center'>
    <section className='w-full h-full bg-light sm:w-[70%] sm:h-[70%] sm:rounded-3xl sm:shadow-xl sm:p-8 sm:grid sm:grid-cols-2 text-Charcoal-Grey'>
      <SignupDetail/>
      <div className='bg-backgroundMobile bg-contain bg-no-repeat sm:bg-right sm:bg-backgroundDesktop '></div>
    </section>
  </section>
  )
}

export default SignUp