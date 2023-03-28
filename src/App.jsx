import './App.css'
import ItemDetailsContainer from './ItemDetails/ItemDetails'
import ItemList from './ItemList/ItemList'

import React, { useState, useEffect } from 'react';

function DesktopView() {
  return (
    <div>
        <ItemDetailsContainer/>
    </div>
  );
}

function MobileView() {
  return (
    <div>
     <ItemList/>
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
