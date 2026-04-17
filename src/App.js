import React, { useRef, useState, useEffect } from 'react';
import Main from './components/Main';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  

  return ( isLoading ? <Loader onStart={() => setIsLoading(false)}/> : <Main />);
}

export default App;