import './app.scss'
import Contact from './components/contact/Contact'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Work from './components/work/Work'
import Footer from './components/footer/Footer'

function App() {


  return (
    <div>
      <section id='Home' >
      <Navbar/>
      <Hero/>
      </section>
      <section id='About' >
      <About/>
      </section>
      <section id='Work'>
        <Work/>
      </section>
     
      <section id='Contact'>
        <Contact/>

     </section>
     <section>
     <Footer/>

     </section>
    </div>
  )
}

export default App
