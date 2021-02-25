import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    {name: 'Adobe Photoshop',price: '$99.99'},
    {name: 'Adobe Illustrator',price: '$89.99'},
    {name: 'PDF Reader',price: '$6.99'},
    {name: 'Premium El',price: '$249.99'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My first react app</h1>
        <Counter></Counter>
        <Todos></Todos>
        {
          products.map(product => <Product product={product}></Product>)
        }
        <Person name = 'Shakib Al Hasan' catagory = 'Best all-rounder'></Person>
        <Person name = 'Tamim Iqbal' catagory = 'Best opener'></Person>
        <Person name = 'Mushfiqur Rahim' catagory = 'Best wicket-keeper'></Person>
      </header>
      
    </div>
  );
}
function Todos(){
  const [todos, setTodos] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setTodos(data))
  }, [])
  return(
    <div>
      <ul>
        {
          todos.map(todo => <li>{todo.name}</li>)
        }
      </ul>
    </div>
  )
}
function Counter(){
  const [count, setCount] = useState(0);
  return(
  <div>
    <h2>Count:{count} </h2>
    <button onClick = {() => setCount(count - 1)}>Decrease</button>
    <button onClick = {() => setCount(count + 1)}>Increase</button>
  </div>
  )
}
function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightGray',
    height: '200px',
    width: '300px',
    color: 'black',
    margin:'10px',
    padding:'5px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h4>{props.product.price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle = {
    border:'2px solid white',
    margin:'10px',
    padding:'10px',
    width: '300px'
  }
  return (
    <div  style={personStyle}>
      <h2>{props.name}</h2>
      <h4>{props.catagory}</h4>
    </div>
  )
}

export default App;
