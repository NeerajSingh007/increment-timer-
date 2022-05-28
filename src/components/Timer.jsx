import React from 'react'
import  { useState, useEffect } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(1);
  const[end , setEnd] = useState();
  const [endtime,setEndtime] = useState(11)

  const start = () =>{
    let id = setInterval(() =>{
      setTimer((prev) => prev+1);
    },1000);
    setEnd(id);
  };
  const reset = () => {
    if(timer === endtime){
      clearInterval(end)
      setTimer(0);
      
    }
  }

  useEffect(() => {
    start();
  },[100,reset()])
 
  return (
    <div>
      <div>Increment Timer:{timer}</div>
         
    
    </div>
  )
}

export default Timer
