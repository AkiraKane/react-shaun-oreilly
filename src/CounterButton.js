import React, { useEffect }from "react"
import { DangerButton } from "./Button" 


export const CounterButton = ({numberOfClicks, onIncrement}) => {  

    useEffect(() => {
        console.log("useEffect function called")
        // return () => console.log("unmounting!")
    }, [])

    return (
        <>
        <p>You've clicked the button {numberOfClicks} times</p>
        <DangerButton onClick={onIncrement}>Click Me!</DangerButton>
        </>
    )
}