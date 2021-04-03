import React, {useState} from "react";
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

  const [numberOfClicks, setNumberOfClicks] = useState(0)

  const [hideMessage, setHideMessage] = useState(false)
    
  const increment = () => setNumberOfClicks(numberOfClicks + 1)

  return (
    <div className="App">
      <header className="App-header">
        {hideMessage
        ? null
        : <CongratulationsMessage 
        numberOfClicks={numberOfClicks} 
        threshold={10}
        onHide={() => setHideMessage(true)} />}
        <CounterButton  numberOfClicks={numberOfClicks} onIncrement={increment}/>
        <Greeting name="Akira" numberOfMessages={20} />
      </header>
    </div>
  );
}

export default App;
