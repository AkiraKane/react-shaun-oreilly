import React, { useEffect } from "react"

export const CongratulationsMessage = ({threshold, onHide}) => {

    return (
        <>
            <h1>Congratulations! You've reach {threshold} number of clicks</h1>
            <button onClick={onHide}>Hide</button>
        </>

    )
}