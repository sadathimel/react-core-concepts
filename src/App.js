import React, { useState, useEffect } from "react";
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
        <Counter></Counter>
        <Users></Users>
        <Posts></Posts>
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

function Counter(){
  const [count, setCount] = useState(10);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={handleDecrease}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Posts(){
  const  [posts, setPosts] = useState([]);

  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => setPosts(data));
  }, [])
  return (
    <div>
      <h3>Dynamic posts:{posts.length}</h3>
      <ul>
        {console.log(posts)}
        {
          posts.map(post=> <li>{post.title}</li>)
        }
      </ul>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
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
