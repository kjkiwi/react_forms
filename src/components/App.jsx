import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [headingText, setHeadingText] = useState("");

  function captureInput(event) {
    setName(event.target.value);
    console.log(name);
  }

  function clickAction() {
    setHeadingText(name);
  }

  return (
    <div className="container">
      <h1>Hello {headingText} </h1>
      <input
        onChange={captureInput}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={clickAction}>Submit</button>
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

//CODE TO UPDATE H1 ON MOUSECLICK WITH FINAL VERSION OF INPUT
// function App() {
//   const [name, setName] = useState("stranger");
//   const [click, setClick] = useState(false);

//   const fullName = [];

//   function typeName(event) {
//     fullName.push(event.target.value);
//   }

//   function mouseEvent() {
//     setClick(true);
//     setName(fullName.pop());
//   }

//   function resetButton() {
//     setClick(false);
//   }

//   return (
//     <div className="container">
//       <h1>Hello {name} </h1>
//       <input onChange={typeName} type="text" placeholder="What's your name?" />
//       <button
//         style={{ backgroundColor: click ? "black" : "white" }}
//         onClick={mouseEvent}
//         onMouseOut={resetButton}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }
