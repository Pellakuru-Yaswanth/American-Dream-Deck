import React, { useRef, useState, useEffect } from 'react';
import Main from './components/Main';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This simulates the time needed to load the high-res video assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);
  

  return ( 
    <Main />
  );
}

export default App;