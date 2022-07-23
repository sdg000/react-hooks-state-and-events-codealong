import React, {useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)
  
  function setPower(){
    setIsOn((isOn) => !isOn)
    
  }
const color = isOn ?  "red" : "blue"
  
  return (
    <button style={{ background: color }} onClick={setPower}>
    {isOn ? "ON" : "OFF"}
  </button>
  )
}

export default Toggle;
