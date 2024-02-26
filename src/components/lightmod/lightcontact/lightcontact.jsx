import React from 'react'
import fb from '../../../assets/fb.png'
import whatsapp from '../../../assets/whatsapp.png'
import email from '../../../assets/email.png'
import github from '../../../assets/githubb.png'

const Lightcontact = () => {
  return (
    <section id='contacttt' className='min-h-[calc(100vh-4rem)] bg-slate-300 pt-[3rem]'>
    <div><h1 className='text-center font-bold text-5xl '>Contact Me</h1></div>
    <h1 className=' text-center p-10'>Please fill out the bellow to discuss any work opportunity.</h1>
    <form className='flex flex-col items-center justify-center m-[1rem] mr-[auto] ml-[auto]  w-[90vw] max-w-[60rem]' action="">
      <input className='text-white font-md w-[100%] max-w-[40rem] m-[0.5rem] p-[0.5rem] bg-[rgb(40,40,40)] border-none rounded-[0.5rem] ' type="text" placeholder='Your Name' />
      <input className='text-white font-md w-[100%] max-w-[40rem] m-[0.5rem] p-[0.5rem] bg-[rgb(40,40,40)] border-none rounded-[0.5rem]' type="email" placeholder='Your Email' />
      <textarea className='text-white font-md w-[100%] max-w-[40rem] m-[0.5rem] p-[0.5rem] bg-[rgb(40,40,40)] border-none rounded-[0.5rem]' name="message"  rows="5" placeholder='Massege'></textarea>
      <button className='font-bold bg-white border-none pr-[3.75rem] pt-[0.75rem] pl-[3.75rem] pb-[0.75rem] rounded-xl m-[2rem] hover:bg-slate-400 hover:text-white'  type='submit' >Submit</button>
      <div className='flex gap-7 justify-center flex-wrap '>
       <img className='w-[3rem] h-[3rem] bg-slate-200 rounded-full' src={fb} alt="./facebook" />
       <a target='blank' href="https://github.com/DaminduPrasadith">  <img className='w-[3rem] h-[3rem] bg-slate-200 rounded-full'src={github} alt="./github" /></a>
        <img className='w-[3rem] h-[3rem] bg-slate-200 rounded-full'src={whatsapp} alt="./whatsapp" />
        <img className='w-[3rem] h-[3rem] bg-slate-200 rounded-full'src={email} alt="./email" />
      </div>
    </form>
    </section>
  )
}

export default Lightcontact