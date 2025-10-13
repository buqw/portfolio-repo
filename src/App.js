import './App.css';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import { useRef } from 'react';
import Projects from './Components/Projects';
import GetTouch from './Components/GetTouch';

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null);
  const certRef = useRef(null)
  const projRef = useRef(null);
  const touchRef = useRef(null);

  const scrollToSec = (ref) =>{
    ref.current.scrollIntoView({behavior: "smooth"})
  }
  return (
    <>
      <Nav scrollToSec={scrollToSec} homeRef={homeRef} aboutRef= {aboutRef} certRef={certRef} projRef={projRef} touchRef = {touchRef}></Nav>
      <Home scrollToSec={scrollToSec} touchRef={touchRef} projRef ={projRef} refProp={homeRef} role={"WEB DEVELOPER"} name={"Hassan Almisbah"}/>
      <About certRef = {certRef} refProp = {aboutRef} />
      <Projects projRef = {projRef} />
      <GetTouch touchRef = {touchRef}/>
    </>
  );
}

export default App;
