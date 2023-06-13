// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar";
import Textform from './components/textform';
import About from './components/about';
import React, { useState} from 'react';

// let name ="Aman"

function App() {
  const [mode,setMode]=useState('dark');
  return (
<>
<Navbar title ="home" about ="about us" mode ={mode}/> 
{/* <div className="container"></div> */}
 <Textform  title ="Enter Text Here"  />
 <About />
   </>
  );
}

export default App;
