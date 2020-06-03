import React, { Component} from "react";
import Card from 'react-bootstrap/Card'
import Collapse from 'react-bootstrap/Collapse'
import {
    PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';

const data01 = [
    { name: 'RSVP', value: 5 },
    { name: 'Total Spots', value: 10}
];
const COLORS = ['#FFBB28', '#FF8042'];

class Event extends Component {

    handleItemClick = () => {
        if (this.props.itemToShow === this.props.event.id) {
            this.props.showItem(-1);
        }
        else {
            this.props.showItem(this.props.event.id);

        }
    }

    getPieData = () => {
        var limit = this.props.event.rsvp_limit;
        var rsvp = this.props.event.yes_rsvp_count;

        var data = [
            {name: "Attending", value: rsvp },
            {name: "Spots Available", value: limit}
        ]
        return data;
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
                    { this.props.event.rsvp_limit && this.props.event.yes_rsvp_count ?
                    <div className="EventChart">
                        <ResponsiveContainer height={100}>
                            <PieChart >
                                <Pie
                                    data={this.getPieData()}
                                    dataKey={"value"}
                                    cx={55}
                                    cy={45}
                                    labelLine={false}
                                    outerRadius={40}
                                    fill="#8884d8"
                                >
                                    {
                                        data01.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                                    }
                                </Pie>
                                <Tooltip/>
                                <Legend align='left' verticalAlign='middle' layout="vertical" height={36}/>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                        : <p className="text-left">{this.props.event.yes_rsvp_count > 0 ? this.props.event.yes_rsvp_count + " is attending" : "Zero reported attendance."}</p>}
                    <Collapse className="collapseElement mt-4" in={this.props.itemToShow === this.props.event.id ? true : false}>
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
