import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Contactt from './components/Contacts/contact'; 
import Footer from './components/footer/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className=''>
      
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <Contactt/>
    <Footer/>
    </section>
    
    
     
    </>
  )
}

export default App
