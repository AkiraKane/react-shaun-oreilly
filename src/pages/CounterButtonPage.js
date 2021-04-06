import React, { useState, useEffect } from "react"
import { CounterButton } from "../CounterButton"
import { CongratulationsMessage } from "../CongratulationsMessage"
import { parse } from "query-string"
import { DisplayIf } from "../DisplayIf"

export const CounterButtonPage = () => {
 
    const [numberOfClicks, setNumberOfClicks] = useState(Number(localStorage.getItem("numberOfClicks")) || 0)

    useEffect(() => {
      localStorage.setItem("numberOfClicks", numberOfClicks)
    }, [numberOfClicks])
 
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