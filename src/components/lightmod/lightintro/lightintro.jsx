import React from 'react'
import { Link } from 'react-router-dom'
import pto from '../../../assets/background.png'
import Lightnav from '../lightnavbar/lightnav'
import Lightabout from '../lightabout/lightabout'
import Lightskills from '../lightskills/lightskills'
import Lightcontact from '../lightcontact/lightcontact'
import Lightfooter from '../lightfooter/lightfooter'
import moon from '../../../assets/moon.png'
import profile from '../../../assets/aluth.png'
import './lightintro.css'



const Lightintro = () => {
 

  

  return (
    <section className='  ' >
      
      
      <Lightnav/>
   <Link to="/App"  className='flex '>  <img  className=' moon z-50 fixed right-[2rem] h-[2rem] top-[1rem] flex-1 ' src={moon} alt="" /> </Link>

      
   <img id='profilepto' className='flex-1 absolute top-[-4rem] right-[-10%] w-[700px] z-30 opacity-75
      ' src={profile} alt="" />
      <section  className='  min-h-[calc(100vh-4rem)] bg-white '>
      <div className='flex flex-col gap-10 ml-[5rem] mt-[400px]'>
        <div className='flex-2'></div>
      <div className='flex-1 z-50'>
       <span className='flex flex-col z-50 text-white  pb-[5rem] '> <span> Hello, </span><span className=' font-bold text-white text-6xl  '>I'm Damindu </span> 
       <p className='text-base overflow-auto'>I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites. </p> </span>
      </div>
      
      </div>
    <div id='aaaaaaaaaa' className=' absolute top-0 z-10'>
      <img  className='h-[900px]   ' src={pto} alt="" />
      </div>
      
      </section>
      
      

      <Lightabout/>
      <Lightskills/>
      <Lightcontact/>
      <Lightfooter/>
    </section>
    
    

  )
}

export default Lightintro