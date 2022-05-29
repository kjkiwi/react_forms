import React, { useState } from "react";

function App() {
  const [name, setName] = useState("You");
  const [click, setClick] = useState(false);

  const fullName = [];

  function typeName(event) {
    fullName.push(event.target.value);
  }

  function mouseEvent(event) {
    setClick(true);
    setName(fullName.pop());
  }

  return (
    <div className="container">
      <h1>Hello {name} </h1>
      <input onChange={typeName} type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: click ? "black" : "white" }}
        onClick={mouseEvent}
      >
        Submit
      </button>
    </div>
  );
}

export default App;

//CODE TO CHANGE BUTTON COLOR ON MOUSE CLICK

// function App() {

//   const [name, setName] = useState("You")
//   const [click, setClick] = useState(false)

//   function typeName(event) {
//     setName(event.target.value)
//   }

//   function mouseEvent(event) {
// setClick (true)
//   }

//   return (
//     <div className="container">
//       <h1>Hello {name} </h1>
//       <input onChange={typeName} type="text" placeholder="What's your name?" />
//       <button style={{backgroundColor: click ? 'black': 'white'}} onClick={mouseEvent} >Submit</button>
//     </div>
//   );
// }
