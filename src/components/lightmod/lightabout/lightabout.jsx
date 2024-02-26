import React from 'react'
import ui from '../../../assets/layers.png'
import web from '../../../assets/web-design.png'
import social from '../../../assets/digital-campaign.png'
import edite from '../../../assets/video-editing-app.png'

const Lightabout = () => {
  return (
    <section id='abou' className='bg-white pt-[3rem] m-0 min-h-[calc(100vh-4rem)]'>
        <section id='abouttt' className='m-0 min-h-[calc(100vh-4rem)]' >
       <div className='flex  flex-col justify-center items-center h-[700px] '  >
        <div className=''>
            <h1 className='text-5xl font-bold '>What i Do</h1>
        </div>
        <div className='pt-[5%]'>
            <p  className='text-center pl-[10%] pr-[10%] font-mono font-semibold '>I am Damindu.An Undergraduate in University of Kelaniya as a computer science student.I am a skilled and passionate web designer with experience in creating visually opperating and user-friendly websites.I have a strong understanding of design and a keen eye for details.I am proficiant in HTML,CSS and JavaScript,as wel as design software such as Adobe Photoshop and coraldraw.</p>
        </div>
        <div className='pt-[5%]'>
               <div className='flex flex-col gap-7 text-white '>
                <div id='blocks' className=' h-[5rem] bg-slate-600 w-[600px] rounded-2xl '>
                    <div className='flex gap-6'>
                        <div className='p-[1rem]'><img className='w-[3rem] h-[3rem]' src={ui} alt="./ui ux" /> </div>
                        <div className='flex flex-col font-bold p-[1rem]'>
                            UI/UX design <span className='font-thin'>Expert of figma and adobe xd.</span>
                        </div>
                    </div>
                </div>
                <div id='blocks' className='h-[5rem] bg-slate-600 w-[600px] rounded-2xl '>
                    <div className='flex gap-6'>
                        <div className='p-[1rem]'><img className='w-[3rem] h-[3rem]' src={web} alt="./ui ux" /> </div>
                        <div className='flex flex-col font-bold p-[1rem]'>
                            Web design <span className='font-thin'>Familiar with react,tailwind,javascript.</span>
                        </div>
                    </div>
                </div>
                <div id='blocks' className='h-[5rem] bg-slate-600  w-[600px] rounded-2xl'>
                    <div className='flex gap-6'>
                        <div className='p-[1rem]'><img className='w-[3rem] h-[3rem]' src={social} alt="./ui ux" /> </div>
                        <div className='flex flex-col font-bold p-[1rem]'>
                            Social Media Marcketing <span className='font-thin'>Expert of social media marcketing. </span>
                        </div>
                    </div>
                </div>
                <div id='blocks' className='h-[5rem] bg-slate-600  w-[600px] rounded-2xl'>
                    <div className='flex gap-6'>
                        <div className='p-[1rem]'><img className='w-[3rem] h-[3rem]' src={edite} alt="./ui ux" /> </div>
                        <div className='flex flex-col font-bold p-[1rem]'>
                            Video editing <span className='font-thin'>Video editing from inshot, canva, Pr </span>
                        </div>
                    </div>
                </div>
               </div>
        </div>
       </div>
     </section>

    </section>
  )
}

export default Lightabout