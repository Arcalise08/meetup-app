import React, { Component } from 'react';
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents } from './api';
import moment from "moment";
import {
    ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

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

    countEvents = (date) => {
        let count = 0;
        for (let i = 0; i < this.state.events.length; i += 1) {
            if (this.state.events[i].local_date === date) {
                count += 1;
            }
        }
        return count;
    }

    getData = () => {
        const next7Days = [];
        const currentDate = moment();
        for (let i = 0; i < 7; i += 1) {
            currentDate.add(1, 'days');
            const dateString = currentDate.format('YYYY-MM-DD');
            const count = this.countEvents(dateString);
            next7Days.push({ date: dateString, number: count });
        }
        return next7Days;
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
                <h5>Upcoming Events</h5>
                <div className="chartContainer mx-auto col-md-6">
                    <ResponsiveContainer height={300} >
                        <ScatterChart
                            margin={{
                                top: 20, right: 20, bottom: 20, left: -10,
                            }}

                        >
                            <CartesianGrid />
                            <XAxis type="category" dataKey="date" name="date"/>
                            <YAxis type="number" dataKey="number" name="number of events" />
                            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                            <Scatter data={this.getData()} fill="#8884d8" />
                        </ScatterChart>
                    </ResponsiveContainer>
                </div>
                <EventList events={this.state.eventsToShow}/>
            </div>
        );
    }

}

export default App;
