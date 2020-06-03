import React, { Component } from "react";
import {ErrorAlert} from "./alert";

class NumberOfEvents extends Component {
    constructor() {
        super();
        this.state = {
            numberToShow: 0,
            showError: ""
        }
    }

    handleNumberChange = (event) => {
        this.props.eventsNum(event.target.value);
        this.setState({
            numberToShow: event.target.value,
        })
        if (event.target.value <= 0) {
            this.setState({
                showError: "Number should be greater than 0",
            })
        }
        else {
            this.setState({
                showError: "",
            })
        }
    }

    render() {
        const { currentNum} = this.props;
        return (
            <div className="eventNumber">
                <small>Events to show<br/></small>
                <input
                    className="eventNumberInput form-control mx-auto mb-3 col-3"
                    type="number"
                    placeholder={currentNum}
                    onChange={this.handleNumberChange}
                    style={{textAlign : "center"}}
                />
                <ErrorAlert text={this.state.showError}/>

            </div>
        )
    }
}

export default NumberOfEvents;
