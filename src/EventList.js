import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
    constructor() {
        super();
        this.state = {
            shownEvent: 0
        }
    }

    showEvent = (id) => {
        this.setState({
            shownEvent: id
        })
    }


    render() {
        return (
            <ul className="EventList list-group">
                {this.props.events.map(event =>
                    <li className="Event" key={event.id}>
                        <Event event={event} refs="child" itemToShow={this.state.shownEvent} showItem={(id) => this.showEvent(id)}/>
                    </li>
                )}
            </ul>
        )
    }
}

export default EventList;
