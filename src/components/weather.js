import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchWeather } from '../actions';

class Weather extends Component {

    componentDidMount() {
        this.props.fetchWeather("osaka");
    }

    renderWeather(cityData) {
        const id = cityData.city.id;
        const temps =  _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr key={id}>
                <td>lat={lat} lon={lon}</td>
                <td>{_.round(temps[0], 2)}</td>
            </tr>
        );
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (°C)</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({ weather }) {     // { weather } === state.weather
    return { weather };                     // { weather } === { weather: weather }
}

export default connect(mapStateToProps, {fetchWeather})(Weather);