import './App.css'
import React, { useState, useEffect } from 'react';
import Mobile from './Mobile/Mobile';

function DesktopView() {
  return (
    <div>
    </div>
  );
}

function MobileView() {
  return (
    <div>
      <Mobile/>
    </div>
  );
}

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}

export default App
