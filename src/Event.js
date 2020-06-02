import React, { Component, useEffect } from "react";
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'

class Event extends Component {

    handleItemClick = () => {
        if (this.props.itemToShow === this.props.event.id) {
            this.props.showItem(-1);
        }
        else {
            this.props.showItem(this.props.event.id);

        }
    }

    stripTags = (str) => {
        if (str) {
            var curStr = str.toString();
            var newStr = curStr.replace(/(<([^>]+)>)/ig,"");
            return newStr;
        }
    }

    render() {
        return (
            <Card className="eventItem my-2 bg-gradient-dark border border-dark mx-auto col-md-6">
                <Card.Title className="eventTitle text-left my-2">
                    {this.props.event.name}
                </Card.Title>
                <Card.Body className="border-top">
                    <h5 className="text-left">
                        {this.props.event.local_date + " " + this.props.event.local_time}
                    </h5>
                    <h6 className="text-left">
                        <u><strong>{this.props.event.group.name}</strong></u>
                    </h6>
                    <p className="attending text-left">
                        <strong>{this.props.event.yes_rsvp_count}</strong> are attending!
                    </p>
                    <Collapse className="collapseElement" in={this.props.itemToShow === this.props.event.id ? true : false}>
                        <p className="hidden">
                            {
                                this.props.event.venue ?
                               "Hosted By: "
                                : ""
                            }
                            {this.props.event.venue ? this.props.event.venue.name : ""}
                            {this.props.event.venue ? <br/> : null}
                            {this.props.event.venue ? this.props.event.venue.address_1 : ""}
                            {this.props.event.venue ? <br/> : null}
                            {this.props.event.venue ? <br/> : null}
                            {this.props.event.description ? this.stripTags(this.props.event.description) : "No Further details are available! Sorry!"}
                        </p>

                    </Collapse>
                    <button
                        className="details btn ml-auto d-block mt-3 btn-outline-dark"
                        onClick={() => this.handleItemClick()}
                    >
                        {this.props.itemToShow === this.props.event.id ? "Hide Details" : "Show Details"}
                    </button>
                </Card.Body>
            </Card>
        )
    }
}

export default Event;
