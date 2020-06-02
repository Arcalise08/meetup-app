import React, { Component } from 'react';
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from './api';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




class App extends Component {
    constructor() {
        super();
        this.state = {
            eventsNumber: 30,
            events: [],
            eventsToShow: [],
            mounted: false
        }
    }

    componentDidMount() {
        this.setState({
            mounted: true
        })
        this.updateEvents();
    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }

    updateEventsNumber = (num) => {
            this.setState({
                eventsNumber: num
            });
            var temp = [];
            var number = num > this.state.events.length ? this.state.events.length : num;

            for (var i=0; i < number; i++) {
                temp.push(this.state.events[i])
            }
            if (this.state.mounted) {
                this.setState({ eventsToShow: temp });
            }
    }

    updateEvents = (lat, lon) => {
        getEvents(lat, lon ).then(event => {
            if (this.state.mounted) {
                this.setState({
                    events: event})
                this.updateEventsNumber(this.state.eventsNumber);
            }
        })

    }

    render() {
        return (
            <div className="App">
                <CitySearch updateEvents={this.updateEvents}/>
                <NumberOfEvents currentNum={this.state.eventsNumber} eventsNum={(num) => this.updateEventsNumber(num)}/>
                <h5 className={this.state.events.length > 0 ? "" : "d-none"}>
                    <strong><u>Showing {this.state.eventsToShow.length } events!</u></strong>
                </h5>
                <EventList events={this.state.eventsToShow}/>
            </div>
        );
    }

}

export default App;
