import { Route, Routes } from 'react-router-dom'
import cursor from './components/Cursor'
import IntroAnimation from './components/IntroAnimation'
import gsap from 'gsap-trial'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'

function App() {
  /*const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
  tl.to(".text", { y: "0%", duration: 1, stagger: 0.75 });
  tl.to(".slider", { y: "-100%", duration: 1.5, delay: 1 });
  tl.to(".introa", { y: "-100%", duration: 1 }, "-=1");
  tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
  */

  let mouseCursor = document.querySelector('.cursor');
  window.addEventListener('mousemove', cursor);
  function cursor(e) {
      mouseCursor.style.top = e.pageY + 'px';
      mouseCursor.style.left = e.pageX + 'px';
  }

  return (
    <>
      <div className='cursor'></div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
