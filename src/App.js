import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const nayoks = ["Anwar", "Jafor", "Alomgir", "Salman sha", "Bappi", "Shovo"];
  const products = [
    { name: "Photoshop", price: "$99.99" },
    { name: "Illustrator", price: "$60.0" },
    { name: "PDF Reader", price: "$6.9" },
    { name: "Premier El", price: "$249.9" },
  ];
  const friends = [
    { name: "sakib", type: "close" },
    { name: "Bappy", type: "top close" },
    { name: "nazmul", type: "top close" },
    { name: "salma", trpe: "very very top close" },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <ul>
          {nayoks.map((noyok) => (
            <li>{noyok}</li>
          ))}
          {products.map((product) => (
            <li>{product.name}</li>
          ))}
          {friends.map((fnd) => (
            <li>{fnd.name}</li>
          ))}
        </ul>
        {products.map((pd) => (
          <Product product={pd}></Product>
        ))}
        <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Person></Person>
        <Friend friend={friends[0]}></Friend>
      </header>
    </div>
  );
}

function Product(props) {
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    height: "200px",
    width: "200px",
    float: "left",
    margin: "10px",
  };

  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy now</button>
    </div>
  );
}

function Person(props) {
  return (
    <div
      style={{
        border: "2px solid gold",
        width: "400px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>My Name: {props.name}</h3>
      <p>My Profession: {props.job}</p>
    </div>
  );
}

function Friend(props) {
  const friendsStyle = {
    color: 'red',
    backgroundColor: 'white'
  };
console.log(props)
const {name,type} = props.friend
  return (
    <div style={friendsStyle}>
      <h1>{name}</h1>
      <p>{type}</p>
    </div>
  );
}

export default App;
