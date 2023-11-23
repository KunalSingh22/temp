// IndexComponent.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const IndexComponent = (props) => {
  const [val, setVal] = useState("");

  const onchangefunc=(event)=>{
    setVal(event.target.value)
  }

  useEffect(() => {
    const socket = io();

    socket.on('data', (data) => {
      setVal(prevVal => prevVal + data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <>
      <h1 className= {`text-${props.mode==='dark'?'light':'dark'} my-2`}>Generated stream from the arduino board is</h1>
      <div id="sample"></div>
      <textarea className={`form-control bg-${props.mode} text-${props.mode==='dark'?'light':'dark'}`} value={val} onChange={onchangefunc} id="my-box" rows="9"></textarea>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js"></script>
    </>
  );
};

export default IndexComponent;
