import axios from 'axios';

export const FETCH_CALENDAR  = 'FETCH_CALENDAR';
export const FETCH_WEATHER  = 'FETCH_WEATHER';

export function fetchCalendar(maxResults = 10) {
    const url = `${process.env.REACT_APP_JOURNEY_URL}?maxResults=${maxResults}`;
    const resp = axios.get(url); // Returns a promise

    return {
        type: FETCH_CALENDAR,
        payload: resp
    };
}

export function fetchWeather(city, countryCode) {
    const url = `${process.env.REACT_APP_OPEN_WEATHER_URL}&q=${city}&cnt=10`;
    const resp = axios.get(url);             // Returns a promise

    // ReduxPromise middlewire (../components/app.js) resolves the promise, creates a new Action
    // (with json data in the same payload) and send it to reducers
    return {
        type: FETCH_WEATHER,
        payload: resp
    };
}