import React ,{useState,useEffect} from 'react';
import {Link} from 'react-scroll';



import logo from '../../assets/brightness.png'
import './navbar.css'
import d from '../../assets/2222.png'
import menu from '../../assets/menu.png'
import  ReactDOM  from 'react-dom/client';

import Lightintro from '../lightmod/lightintro/lightintro';





function Navbar() {
  const [show,setshow] = useState(false)

 



  

  const sidebarshow = ()=>{
       if(show == true){
        setshow(false)
       }else{
        setshow(true)
       }
  }

 

  return (
    <div  className=' sticky top-0 z-20'>
       <div id='mainnav' className='flex mx-w-[75rem] h-[3rem]  p-[1rem]  bg-[rgb(30,30,30)]  '>
        <div className='flex-1 flex justify-center items-center mt-[2rem]'> <img className=' w-[9rem]  ' src={d} alt="logo" /></div>
        <div className='flex-2  font-bold' >
          
            <Link activeClass='active bg-[#0bceaf] text-black rounded p-1' to='intro' spy={true} smooth={true} offset={-100} duration={600} className='menubaritems text-[#0bceaf] m-[1rem] hover:text-2xl cursor-pointer hover:bg-[#0bceaf] hover:rounded hover:text-black'>HOME</Link>
            <Link activeClass='active bg-[#0bceaf] text-black rounded p-1' to='abouttt' spy={true} smooth={true} offset={-100} duration={600} className='menubaritems text-[#0bceaf] m-[1rem] hover:text-2xl cursor-pointer hover:bg-[#0bceaf] hover:rounded hover:text-black'>ABOUT</Link>
            <Link activeClass='active bg-[#0bceaf] text-black rounded p-1 ' to='skilll' spy={true} smooth={true} offset={-100} duration={600} className='menubaritems text-[#0bceaf] m-[1rem] hover:text-2xl cursor-pointer hover:bg-[#0bceaf] hover:rounded hover:text-black'>SKILLS</Link>
            <Link activeClass='active bg-[#0bceaf] text-black rounded p-1' to='contacttt' spy={true} smooth={true} offset={-100} duration={600} className='menubaritems text-[#0bceaf] m-[1rem] hover:text-2xl cursor-pointer hover:bg-[#0bceaf] hover:rounded hover:text-black'>CONTACT</Link>
        </div>
        <div className='flex-1'>
          <div  className=' flex gap-4 justify-center   '>

          
            
            
         
         
         </div>
        </div>
       </div>


       <img id='menuicon' onClick={sidebarshow} className=' w-[2rem] h-[2rem] cursor-pointer right-[5px] top-[10px] hidden absolute hover:bg-slate-600 hover:rounded-full hover:p-1  ' src={menu} alt="" />
     { show && <div id='mobilemenu' className='flex font-bold flex-col items-end pt-[5rem] hidden ' >
            <Link activeClass='active bg-[#0bceaf] text-black rounded p-1' to='intro' spy={true} smooth={true} offset={-100} duration={600} className='menubaritems text-[#0bceaf] m-[1rem] hover:text-2xl cursor-pointer hover:bg-[#0bceaf] hover:rounded hover:text-black'>HOME</Link>
            <Link activeClass='active bg-[#0bceaf] text-black rounded p-1' to='abouttt' spy={true} smooth={true} offset={-100} duration={600} className='menubaritems text-[#0bceaf] m-[1rem] hover:text-2xl cursor-pointer hover:bg-[#0bceaf] hover:rounded hover:text-black'>ABOUT</Link>
            <Link activeClass='active bg-[#0bceaf] text-black rounded p-1 ' to='skilll' spy={true} smooth={true} offset={-100} duration={600} className='menubaritems text-[#0bceaf] m-[1rem] hover:text-2xl cursor-pointer hover:bg-[#0bceaf] hover:rounded hover:text-black'>SKILLS</Link>
            <Link activeClass='active bg-[#0bceaf] text-black rounded p-1' to='contacttt' spy={true} smooth={true} offset={-100} duration={600} className='menubaritems text-[#0bceaf] m-[1rem] hover:text-2xl cursor-pointer hover:bg-[#0bceaf] hover:rounded hover:text-black'>CONTACT</Link>
           
        </div> }

        
          








        
       


       
    </div>
    
  )
}

export default Navbar
