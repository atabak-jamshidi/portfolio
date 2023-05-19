import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import './App.css';
import Navbar from './scenes/Navbar.jsx'

function App() {
  const [selectedPage, setSelectedPage] = useState('home')
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)")
  const [isTopOfPage, setIsTopOfPage] = useState(true)

  useEffect(()=>{
    const handleScroll = ()=>{
      if (window.scrollY === 0 ) setIsTopOfPage(true);
      if(window.scrollY !== 0 ) setIsTopOfPage(false);
    } 
    window.addEventListener("scroll", handleScroll)
    return window.removeEventListener("scroll", handleScroll)
  },[])
    // just for test 

    // *********
  return (
    <div className="app">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <div className=''>
      </div>
    </div>
  );
}

export default App;
