import React from "react";

export class CongratulationsMessageCB extends React.Component {
    render(){
        const { threshold, onHide } = this.props
        return (
            <>
                <h1>Congratulations! You've reach {threshold} number of clicks</h1>
                <button onClick={onHide}>Hide</button>
            </>
    
        )
    }
}