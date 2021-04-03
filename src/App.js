import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting'
import { PeopleList } from "./PeopleList"
import { CounterButton } from "./CounterButton"
import { CongratulationsMessage } from "./CongratulationsMessage"

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
        <CongratulationsMessage threshold={10} />
        <CounterButton />
        <Greeting name="Akira" numberOfMessages={20} />
      </header>
    </div>
  );
}

export default App;
