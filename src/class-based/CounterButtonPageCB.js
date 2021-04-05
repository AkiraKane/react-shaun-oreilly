import React from "react"
import { CounterButtonCB } from "./CounterButtonCB"
import { CongratulationsMessageCB } from "./CongratulationsMessageCB"
import { DisplayIf } from "../DisplayIf"

export class CounterButtonPageCB extends React.Component {
    state = {
        hideMessage: false,
        numberOfClicks: 0, 
    }

    // Setup subscriptions and make network request, it is called when the component is first mounted
    componentDidMount() {

    }

    increment = () => {
        this.setState({ numberOfClicks: this.state.numberOfClicks + 1 })
    }


    render(){
        const { hideMessage, numberOfClicks } = this.state
        return (
            <>
            <h3>The Counter Button Page</h3>
            <DisplayIf condition={!hideMessage && numberOfClicks >= 10}>
              <CongratulationsMessageCB 
                threshold={10}
                onHide={() => this.setState({ hideMessage: true })} />
            </DisplayIf>
              <CounterButtonCB  numberOfClicks={numberOfClicks} onIncrement={increment}/>
            </>
        );
    }
}