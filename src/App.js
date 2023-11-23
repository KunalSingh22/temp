import './App.css';
import Navbar from './components/Navbar.js';
// import About from './components/About.js';
 import Reactforms from './components/Reactforms.js';

 import Alerts from './components/Alerts.js';
 import React, {useState} from 'react'
 import IndexComponent from './components/IndexComponent';

function App() {
  const[mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='dark'){setmode('light')
     document.body.style.backgroundColor='white';
     showalert("Light mode has been enabled","success");
  }
    else {setmode('dark')
    document.body.style.backgroundColor='black';
    showalert("Dark mode has been enabled","success")
    }
  }
  const[Alert,setAlert]=useState(null);
const showalert=(message,type)=>{
  setAlert(
    {
      msg:message,
      type:type
    }
  )
  setTimeout(()=>{
    setAlert(null);
  },1000);
}
  return (
     <>
        <Navbar title="Sign_Language_Converter" mode={mode} togglemode={togglemode} />
        <div className="container" >
          <Alerts Alert={Alert}/>
          <div>
            <IndexComponent mode={mode}/>
          <Reactforms title="Final meaningful sentence" mode={mode} showalert={showalert}/ >
          </div>
           
        {/* <About/> */}
        </div>
      </>
  );
}

export default App;
