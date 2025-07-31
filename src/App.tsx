import { Navbar } from './componets/Navbar'
import { Hero } from './componets/Hero'
import { Stats } from './componets/Stats'
import './App.css'
import Carousel from './componets/Carousel'
import Projects from './componets/Projects'
import { AboutMe } from './componets/AboutMe'
import  Contact  from './componets/Contact'

function App() {
  return (
    <>
      <div className="font-sans">
      <Navbar />
      <Hero />
      <Stats />
      <Carousel/>
      <Projects />
      <AboutMe/>
      <Contact/>
    </div>
        
    </>
  )
}

export default App
