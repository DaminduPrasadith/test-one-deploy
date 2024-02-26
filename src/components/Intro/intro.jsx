import React from 'react'
import clip from '../../assets/3.mp4'
import './intro.css'
import profile from '../../assets/aluth.png'
import logo from '../../assets/brightness.png'
import { Link } from 'react-router-dom'
const Intro = () => {
  return (
    <section className=' w-[100vw] max-w-[75rem] m-[auto] overflow-hidden min-h-[calc(100vh-4rem)]  ' id='intro'>
     
      <Link to="/Lightintro"  className=' flex justify-center gap-1 fixed right-[2rem] top-[1rem] z-30  '> <img id='lightpto' className=' w-[2rem] h-[2rem] cursor-pointer ' src={logo} alt="" />
          <button  id='bttn' className='  text-white'>Light </button> </Link>

          <Link  to="/Lightintro"  id='lighttttt' className='flex fixed justify-start gap-1 p-[10px] hidden hover:bg-slate-600 hover:rounded-full  '> <img id='lightptoo' className=' w-[2rem] h-[2rem] cursor-pointer ' src={logo} alt="" />
          <button id='bttn' className=' text-white'>Light </button> </Link>
          
      <div id='aaa' className=''>
      <img id='profilepto' className='flex-1 absolute top-[-4rem] right-[-10%] w-[700px] z-10 opacity-60 shadow-lg
      ' src={profile} alt="" />
        <div id='itroducc' className='flex-1 z-10 h-[100vh] w-[100vh] p-[2rem] text-[3rem] text-700 z-10 flex flex-col justify-center text-white'>
        <span id='hell' className='Hello text-[1.75rem]'>Hello,</span>
        <span>I'm <span className='text-[#0bceaf] font-bold' >Damindu</span> <br /></span>
        <div className='wrapper inline-flex '>
        <ul className='dynamic-txts leading-[65px] h-[65px] font-extrabold'>
            <li><span>Web Designer</span></li>
            <li><span>UI/UX Designer</span></li>
            <li><span>Graphic Designer</span></li>
            <li><span>social Media Marketer</span></li>
        </ul>
        </div>
        
        
         
         <p className='text-base overflow-auto'>I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites. </p>
         </div>
         </div>
         <div id='tempory' className='hidden'>
         <div id='itroduc' className='flex-1 z-10 h-[100vh] w-[100vh] p-[2rem] text-[3rem] text-700 z-10 flex flex-col justify-center text-white'>
        <span id='hell' className='Hello text-[1.75rem]'>Hello,</span>
        <span>I'm <span className='text-[#0bceaf] font-bold' >Damindu</span> <br /></span>
        <div className='wrapper inline-flex '>
        <ul className='dynamic-txts leading-[65px] h-[65px] font-extrabold'>
            <li><span>Web Designer</span></li>
            <li><span>UI/UX Designer</span></li>
            <li><span>Graphic Designer</span></li>
            <li><span>social Media Marketer</span></li>
        </ul>
        </div>
        
        
         
         <p className='text-base overflow-auto'>I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites. </p>
         </div>
         </div>
           <video className='mix-blend-lighten absolute opacity-[20%] top-[8rem] -z-10' src={clip} autoPlay muted loop controls="false"></video>
             
    </section>
  )
}

export default Intro