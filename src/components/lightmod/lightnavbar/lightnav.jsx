import React from 'react'
import { Link } from 'react-scroll'
import {useState,useEffect} from 'react';
import './lightnav.css'
import menu from '../../../assets/menu.png'

const Lightnav = () => {
  const [show,setshow] = useState(false)

 



  

  const sidebarshow = ()=>{
       if(show == true){
        setshow(false)
       }else{
        setshow(true)
       }
  }
  return (
    <div  className=' sticky top-0 bg-slate-400 z-50 '>
      <img id='menuicon' onClick={sidebarshow} className=' z-40 w-[2rem] h-[2rem] cursor-pointer right-[5px] top-[10px] hidden absolute hover:bg-slate-600 hover:rounded-full hover:p-1  ' src={menu} alt="" />

{ show &&   <div id='temporymenuuu' className='  flex flex-col text-white justify-end items-end pt-[5rem] absolute right-0 bg-slate-400 ' >
            <Link activeClass='active bg-black text-white rounded p-1' to='aaaaaaaaaa' spy={true} smooth={true} offset={-100} duration={600} className='m-[1rem] cursor-pointer font-bold hover:text-2xl hover:text-yellow-400   ' >HOME</Link>
            <Link activeClass='active bg-black text-white rounded p-1' to='abou' spy={true} smooth={true} offset={-100} duration={600} className='m-[1rem] cursor-pointer font-bold hover:text-2xl hover:text-yellow-400 ' >ABOUT</Link>
            <Link activeClass='active bg-black text-white rounded p-1' to='skilll' spy={true} smooth={true} offset={-100} duration={600} className='m-[1rem] cursor-pointer font-bold hover:text-2xl hover:text-yellow-400 ' >SKIILS</Link>
            <Link activeClass='active bg-black text-white rounded p-1' to='contacttt' spy={true} smooth={true} offset={-100} duration={600} className='m-[1rem] cursor-pointer font-bold hover:text-2xl hover:text-yellow-400 ' >CONTACT</Link>
          </div> }
      <div className=' flex  '>
        <div className=' flex-1 ' ></div>
        <div className='flex-2'>
          <div id='lightmenu' className='flex text-white'>
            <Link activeClass='active bg-black text-white rounded p-1' to='aaaaaaaaaa' spy={true} smooth={true} offset={-100} duration={600} className='m-[1rem] cursor-pointer font-bold hover:text-2xl hover:text-yellow-400   ' >HOME</Link>
            <Link activeClass='active bg-black text-white rounded p-1' to='abou' spy={true} smooth={true} offset={-100} duration={600} className='m-[1rem] cursor-pointer font-bold hover:text-2xl hover:text-yellow-400 ' >ABOUT</Link>
            <Link activeClass='active bg-black text-white rounded p-1' to='skilll' spy={true} smooth={true} offset={-100} duration={600} className='m-[1rem] cursor-pointer font-bold hover:text-2xl hover:text-yellow-400 ' >SKIILS</Link>
            <Link activeClass='active bg-black text-white rounded p-1' to='contacttt' spy={true} smooth={true} offset={-100} duration={600} className='m-[1rem] cursor-pointer font-bold hover:text-2xl hover:text-yellow-400 ' >CONTACT</Link>
          </div>
        </div>
        <div className='flex-1'></div>

      </div>
    </div>
  )
}

export default Lightnav