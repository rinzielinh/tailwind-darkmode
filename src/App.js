import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Slogan from './components/Slogan';
import Content from './components/Content';


function App() {

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const [isMobile, setMobile] = useState(false);

  useEffect( () => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    };
    window.addEventListener("resize", handleSize)
    handleSize();
    return () => window.removeEventListener("resize", handleSize)
  }, []);

  useEffect (() => {
    // console.log('windowSize', windowSize)
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize])
  return (
    <div className="font-sora overflow-y-auto overflow-x-hidden text-13 h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-900 dark:to-purple-700 dark:text-white from-white to-pink-500 text-black md:px-20">
      <NavBar isMobile={isMobile}/>
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
