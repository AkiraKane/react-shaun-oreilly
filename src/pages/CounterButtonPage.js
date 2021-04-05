import React, { useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { CounterButton } from "../CounterButton"
import { CongratulationsMessage } from "../CongratulationsMessage"
import { parse } from "query-string"
import { DisplayIf } from "../DisplayIf"

export const CounterButtonPage = () => {

    // const { name } = useParams()
    const location = useLocation()
    const startingValue = parse(location.search).startingValue || 0 
 
    const [numberOfClicks, setNumberOfClicks] = useState(Number(startingValue))
 
    const [hideMessage, setHideMessage] = useState(false)
      
    const increment = () => setNumberOfClicks(numberOfClicks + 1)
  
    return (
        <>
        <h3>The Counter Button Page</h3>
        <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
          <CongratulationsMessage 
            threshold={10}
            onHide={() => setHideMessage(true)} />
        </DisplayIf>
          <CounterButton  numberOfClicks={numberOfClicks} onIncrement={increment}/>
        </>
    );
}