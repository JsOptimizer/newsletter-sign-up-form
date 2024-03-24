import React from 'react'
import { SignupDetail } from '../components'

const SignUp = () => {
  return (
    <section className='w-full h-full  bg-light lg:w-[70%] lg:h-[70%] lg:rounded-3xl lg:shadow-xl lg:p-8 lg:grid  lg:grid-cols-2 lg:grid-rows-1 text-Charcoal-Grey'>
      <div className='block lg:hidden bg-backgroundMobile bg-center bg-cover  w-full h-72 bg-no-repeat'/>
      <SignupDetail/>
      <div className='hidden lg:block bg-center bg-contain bg-no-repeat lg:bg-backgroundDesktop lg:bg-right'/>
    </section>
  )
}

export default SignUp