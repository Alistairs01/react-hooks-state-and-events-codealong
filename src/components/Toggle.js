/*import React from "react";

function Toggle() {
  //handleButton function
  
  function handleButton(event) {
    event.target.textContent = event.target.textContent === 'ON' ? 'OFF' : 'ON';
  }
  return (
        <>
          <button onClick={handleButton}>OFF</button>
        </>
  )
}

export default Toggle;
*/
import React,{ useState} from "react";


 export default function Toggle() {
  const [isOn, setIsOn] = useState(false);

  //handleButton function
  // assign arrow function to a variable
  const toggleButton =(event) => {
    setIsOn(!isOn)
  };
  return (
    <button onClick={toggleButton}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

