import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchWeather } from '../actions';
import { ListGroup } from 'react-bootstrap';

class Weather extends Component {

    componentDidMount() {
        this.props.fetchWeather(this.props.city.name);
    }

    renderWeather(weatherData) {
        const temp =  _.round(weatherData.main.temp - 273.15);
        const tempMin =  _.round(weatherData.main.temp_min - 273.15);
        const tempMax =  _.round(weatherData.main.temp_max - 273.15);
        return (
            <tr key={weatherData.dt}>
                <td>{weatherData.dt_txt}</td>
                <td>{temp}°C</td>
                <td>{tempMin}°C</td>
                <td>{tempMax}°C</td>
                <td>{weatherData.main.pressure}</td>
                <td>{weatherData.main.humidity}</td>
            </tr>
        );
    }

    render() {
        const { weather } = this.props;
        const city = (weather.length > 0) ? weather[0].city : {};

        let sunriseTime;
        if (city.sunrise) {
            const sunrise = new Date(0); // The 0 there is the key, which sets the date to the epoch
            sunrise.setUTCSeconds(city.sunrise + city.timezone);
            sunriseTime = sunrise.toLocaleTimeString('en-US', {timeZone: 'UTC'});
        }

        let sunsetTime;
        if (city.sunset) {
            const sunset = new Date(0);
            sunset.setUTCSeconds(city.sunset + city.timezone);
            sunsetTime = sunset.toLocaleTimeString('en-US', {timeZone: 'UTC'});
        }

        const lat = (city.coord) ? city.coord.lat : '';
        const lon = (city.coord) ? city.coord.lon : '';

        return (
            <div>
                <ListGroup>
                    <ListGroup.Item>City: {city.name}</ListGroup.Item>
                    <ListGroup.Item>Country: {city.country}</ListGroup.Item>
                    <ListGroup.Item>Coordinates: lat={lat} lon: {lon}</ListGroup.Item>
                    <ListGroup.Item>Population: {city.population}</ListGroup.Item>
                    <ListGroup.Item>Sunrise: {sunriseTime}</ListGroup.Item>
                    <ListGroup.Item>Sunset: {sunsetTime}</ListGroup.Item>
                </ListGroup>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Datetime</th>
                        <th>Temperature</th>
                        <th>Temperature min</th>
                        <th>Temperature max</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {weather.map(data => data.list.map(this.renderWeather))}
                    </tbody>
                </table>
            </div>
        );
    }
}

// function mapStateToProps({ weather }) {     // { weather } === state.weather
//     return { weather };                     // { weather } === { weather: weather }
// }

function mapStateToProps(state, ownProps) {
    const { weather } = state;
    const { city } = ownProps;
    const filtered = _.filter(weather, ['city.name', city.name]);
    return (filtered) ? { weather: filtered } : { weather: [] };
}

export default connect(mapStateToProps, {fetchWeather})(Weather);