import React from 'react'
import './skills.css'
import ps from '../../assets/photoshop.png'
import reactt from '../../assets/reactt.png'
import tailwindd from '../../assets/tailwind.png'
import nodee from '../../assets/node.png'
import corell from '../../assets/corell.png'
import styl from '../../assets/styl.png'
import hiper from '../../assets/hiper.png'
import javas from '../../assets/javas.png'
import wonder from '../../assets/wonder.png'
import canva from '../../assets/canva.png'




const Skills = () => {
  return (
       <section id='skilll'  className='pt-[4rem] min-h-[calc(100vh-4rem)]'>
        <h1   className='text-center font-bold text-white text-5xl'>SKILLS</h1>
    <div className='item-center justify-center flex mr-auto ml-auto p-[2rem] '>
      
    <div className='flex w-[800px] gap-4  flex-wrap '>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500 '>
        <div className=''> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto ' src={ps} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>photoshop</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={reactt} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>react</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={tailwindd} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>tailwind</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={nodee} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>node</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={corell} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>corelldraw</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={styl} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>css</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={hiper} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>html</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={javas} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>javascript</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={wonder} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>wonder share</div>
      </div>
      <div className='flex-1 backdrop:blur-md bg-slate-700  p-[2rem] hover:bg-slate-500'>
        <div className='justify-center'> <img className='w-[3rem] h-[3rem]  mr-auto ml-auto' src={canva} alt="./ps" /> </div>
        <div className='justify-center text-center text-white'>canva</div>
      </div>
      

    </div>
    </div>





    <div class="skills">  
	
	<li>
		<h3 className=''>HTML</h3><span id="bar"><span id="html"></span></span> 
	</li>

	<li>
		<h3>CSS</h3><span id="bar"><span id="css"></span></span>
	</li>

	<li>
		<h3>JAVASCRIPT</h3><span id="bar"><span id="javascript"></span></span>
	</li>

	<li>
		<h3>REACT</h3><span id="bar"><span id="jquery"></span></span>
	</li>
</div>




    </section>
  )
}

export default Skills