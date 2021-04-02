// There are two ways to create components in React
// 1. class
class App extends React.Component{}

// 2. functional component: just function return the JSX

// JSX that React components return is only allowed to contain one top level element
<div></div> 
<React.Fragment></React.Fragment>  // better way, no clutter the DOM
<></>  // equivalent to Fragment, but more consice

// Export one component per file: default export
export default Greeting

// Better way: named exports from their respective files 
export function Greeting
// in the App file, we have to use 
import { Greeting } from 
