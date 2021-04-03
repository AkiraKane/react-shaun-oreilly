// There are two ways to create components in React
// 1. class
class App extends React.Component{}

// 2. functional component: just function return the JSX

// JSX that React components return is only allowed to contain one top level element
<div></div> 
<React.Fragment></React.Fragment>  // better way, no clutter the DOM
<></>  // equivalent to Fragment, but more consice

// Export one component per file: default export, however, we can easily change names when import it
export default Greeting

// Better way: named exports from their respective files 
export function Greeting
// in the App file, we have to use 
import { Greeting } from 

// React components can take props which are attributes that we can pass into our components to change something about them.
// We have to use the curly braces for any prop value we're passing that's not a string

// In HTML (function with parenthese)
<button onlick="dosomething()" />

// In React (function without parenthese)
<button onClick={dosomething} />

// CSS
// 1. import the .css file
// 2. install styled-components library 
// 3. inline css syntax

// Hooks: add state and side effects to our functional React components
const [numberOfClicks, setNumberOfClicks] = useState(0)
// Array Destruction, 
// numberOfClicks: current value of our state
// setNumberOfClicks: function to change the value of the state

// React will only re-render if the props or a value from one of the hooks changes