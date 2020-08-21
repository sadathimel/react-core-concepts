import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman sha"];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props) {
  return (
    <div style={{border:'2px solid gold', width:'400px',margin:'10px',borderRadius:'10px'}}>
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  );
}

export default App;
