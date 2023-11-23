import React ,{useState} from 'react'
//  import Arduino_data from './Arduino_data';
export default function Reactforms(props) {
  
  const handleclick=()=>{
    setText(text.toUpperCase());
   { props.showalert("Text converted to uppercase","success")}
  }
  const handleclick1=()=>{
    setText(text.toLowerCase());
    { props.showalert("Text converted to lowercase","success")}
  }
  const handleclick2=()=>{
    setText("");
    { props.showalert("Text cleared","success")}
  }
  const onchangefunc=(event)=>{
    setText(event.target.value)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    { props.showalert("Started speaking","success")}
  }


  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
     element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    { props.showalert("Text file started downloading","success")}
}



const handleExtraSpaces = ()=>{
  let newText = text.replace(/\s+/g, ' ').trim();
  setText(newText)
  { props.showalert("Extra spaces cleared","success")}
  }

const handleCopyClick =()=>{
  let copyText = document.getElementById("my-box").value;
        navigator.clipboard.writeText(copyText);
        { props.showalert("Text copied to clipboard","success")}
    }

    const handleSrchClick = () => {
      let str = prompt("enter the string you wanna search :");
      let newText = text.includes(str, 0);
      if (newText ===true){
          setText("the string " + str + " is present..");
      }
      else{
          setText("the string " + str + " is not present..");
      }
  }
  const[text,setText]=useState("meaning full sentence here");
  
  return (
    <div className='container'>
  <div className="mb-3" >

  <h1 className= {`text-${props.mode==='dark'?'light':'dark'} my-2`}>{props.title}</h1>
  <div className="mb-3">
  <textarea className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} value={text} onChange={onchangefunc} id="my-box" rows="9"></textarea>
  </div>

<button className="btn btn-primary mx-2 my-2" onClick={handleclick}>Convert to uppercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleclick1}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleclick2}>Clear</button>
<button className='btn btn-primary mx-2 my-2' onClick={downloadTxtFile}>Download Text</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleCopyClick}>Copy text</button>
<button className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove extra spaces</button>
<button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
<button className='btn btn-primary mx-2 my-2' onClick={ handleSrchClick}>Search word</button>

</div>
<div className={`container text-${props.mode==='dark'?'light':'dark'}`} >
  <h1>Text Summary</h1>
  <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words  and {text.length} characters</p>
  <p>{(text.split(" ").filter((element)=>{return element.length!==0}).length)*0.008} minutes average reading time</p>
  <h3>preview</h3>
  <p>{text}</p>
</div>
   </div>
    );
}
