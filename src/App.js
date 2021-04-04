import React, {useState} from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { NavBar } from "./NavBar"
import { HomePage, CounterButtonPage, PeopleListPage, NotFoundPage, ProtectedPage, ControlledFormPage, UncontrolledFormPage} from "./pages"

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
        <NavBar />
        <div className="App-header">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/counter">
              <CounterButtonPage />
            </Route>
            <Route path="/people-list">
              <PeopleListPage />
            </Route>
            <Route path="/protected">
              <ProtectedPage />
            </Route>
            <Route path="/controlled">
              <ControlledFormPage />
            </Route>
            <Route path="/uncontrolled">
              <UncontrolledFormPage />
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
