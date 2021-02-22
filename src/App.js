import logo from './logo.svg';
import './App.css';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My first react app</h1>
        <Person name = 'Shakib Al Hasan' catagory = 'Best all-rounder'></Person>
        <Person name = 'Tamim Iqbal' catagory = 'Best opener'></Person>
        <Person name = 'Mushfiqur Rahim' catagory = 'Best wicket-keeper'></Person>
      </header>
      
    </div>
  );
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
