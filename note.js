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

// When a component needs to access another component's states, and it is not a child of that component, we need to move the state up to whatever patent those two components have in common. Then pass it down to these two components as props

// Lifecycle events in components: useEffect
useEffect(() => {
    console.log("useEffect function called")
})
// The function that we pass to useEffect will get called in 2 different situations:
// 1. it will get called when our component is first rendenred
// 2. it will get called whenever the data of our component updates (the props change or data from one of the hooks chnages)


// Two important differences with useEffect
// 1. We can control when our logic rerun by passing the second argument to useEffect. The first argument is the function that we wanna be called. Thw second argument is the array of values that we want the useEffect hook to watch. The useEffect will only call the function again whenever one or more of these values change.
// 2. The second argument is the empty array, the useEffect hook will never be rerun. Only run when the component first renders and never after that. Really helpful when we fetch data from the server
// 3. The function we pass to useEffect can return another function, and useEffect will call the function that we return when our component unmounts. In other words, when a component is being removed from the DOM.
// 4. be careful about changing state from inside a useEffect hook