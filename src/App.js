import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting'
import { PeopleList } from "./PeopleList"

const people = [{
  name: "Ming",
  age: 19,
  hairColor: "Black" 
}, {
  name: "Li",
  age: '30',
  hairColor: "Brown"
}, {
  name: "Shu",
  age: 35,
  hairColor: 'Blonde'
}]

function App() {

  // const displayAlert = () => {
  //   alert("Hello!")
  // }

  return (
    <div className="App">
      <header className="App-header">
        <p style={{ color: "red", fontSize: "96px" }}>Big Red Text</p>  
        <Greeting name="Akira" numberOfMessages={0} />
        <PeopleList people={people} />
        <button onClick={() => alert("Hello!")}>Click Me!</button>
        <p>
          This is so cool!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
