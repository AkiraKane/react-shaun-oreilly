import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Greeting} from './Greeting'
import { PeopleList } from "./PeopleList"
import { CounterButton } from "./CounterButton"
import { CongratulationsMessage } from "./CongratulationsMessage"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { HomePage, CounterButtonPage, PeopleListPage} from "./pages"

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
      <Router>
        <Link to="/counter">Go to Counter Button Page</Link>
        <Link to="/people-list">Go to People List Page</Link>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/counter/:name">
          <CounterButtonPage />
        </Route>
        <Route path="/people-list">
          <PeopleListPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
