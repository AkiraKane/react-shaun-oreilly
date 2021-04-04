import React, { useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { CounterButton } from "../CounterButton"
import { CongratulationsMessage } from "../CongratulationsMessage"
import { parse } from "query-string"

export const CounterButtonPage = () => {

    // const { name } = useParams()
    const location = useLocation()
    const startingValue = parse(location.search).startingValue
 
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue))
 
    const [hideMessage, setHideMessage] = useState(false)
      
    const increment = () => setNumberOfClicks(numberOfClicks + 1)
  
    return (
        <>
        <h3>The Counter Button Page</h3>
          {hideMessage
          ? null
          : <CongratulationsMessage 
          numberOfClicks={numberOfClicks} 
          threshold={10}
          onHide={() => setHideMessage(true)} />}
          <CounterButton  numberOfClicks={numberOfClicks} onIncrement={increment}/>
        </>
    );
}