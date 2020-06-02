import React, { Component } from "react";
import { getSuggestions } from './api';

class CitySearch extends Component {
    constructor() {
        super();
        this.state = {
            query: '',
            showSuggestion: false,
            suggestions: []
        }
    }

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({
            query: value
        })

        if (event.target.value === "") {
            this.setState({
                showSuggestion: false
            })
        }
        else {
            getSuggestions(value).then(suggestions =>
                this.setState({
                    showSuggestion: true,
                    suggestions: suggestions,
                }));
        }

    }

    handleOnClicked = (value, lat, lon) => {
        this.setState({
            query: value,
            showSuggestion: false
        })
        this.props.updateEvents(lat, lon);
    }

    render() {
        return (
            <div className="CitySearch">
                <h1 className="display-4 mb-5">Search for events near any city!</h1>
                <input
                type="text"
                className="city mx-auto form-control mb-3 col-sm-6"
                onChange={this.handleInputChanged}
                value={this.state.query}
                />
                <ul className="suggestions position-absolute p-0

                 ">
                    {this.state.showSuggestion ? this.state.suggestions.map(item =>
                        <li
                            key={item.name_string}
                            onClick={() => this.handleOnClicked(item.name_string, item.lat, item.lon)}
                            className="form-control list-group col-sm-6 mx-auto"
                        >
                            {item.name_string}
                        </li>
                    ): null}
                </ul>
            </div>
        )
    }
}

export default CitySearch;
