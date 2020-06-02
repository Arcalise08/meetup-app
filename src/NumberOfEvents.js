import React, { Component } from "react";

class NumberOfEvents extends Component {
    constructor() {
        super();
        this.state = {
            numberToShow: 0
        }
    }

    handleNumberChange = (event) => {
        this.props.eventsNum(event.target.value);
        this.setState({
            numberToShow: event.target.value,
        })
    }

    render() {
        const { eventsNum, currentNum} = this.props;
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

            </div>
        )
    }
}

export default NumberOfEvents;
