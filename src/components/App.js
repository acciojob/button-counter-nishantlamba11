
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  let [count,setcount]=useState(0)

  function handleclick(){
    setcount(count+1)
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={handleclick}>click</button>
    </div>
  )
}

export default App
