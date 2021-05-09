import React, { useState, useEffect } from "react"
import { CounterButton } from "../CounterButton"
import { CongratulationsMessage } from "../CongratulationsMessage"
import { parse } from "query-string"
import { DisplayIf } from "../DisplayIf"
import { usePersistentState } from "../usePersistentState"

export const CounterButtonPage = () => {
 
    const [numberOfClicks, setNumberOfClicks] = usePersistentState("numberOfClicks", 0, Number)

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