import React, { useEffect } from "react"
import { Button } from "./Button"

export const CongratulationsMessage = ({threshold, onHide}) => {

    return (
        <>
            <h1>Congratulations! You've reach {threshold} number of clicks</h1>
            <Button buttonColor="yellow" onClick={onHide}>Hide</Button>
        </>

    )
}