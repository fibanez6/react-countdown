import axios from 'axios';

// const ROOT_URL = `http://api.fibanez.com`;
const ROOT_URL = `http://localhost:3000`;

const OPEN_WEATHER_API_KEY = '1895d4cbec4f5c0962b51d1ba678e006';
const OPEN_WEATHER_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPEN_WEATHER_API_KEY}`;

export const FETCH_CALENDAR  = 'FETCH_CALENDAR';
export const FETCH_WEATHER  = 'FETCH_WEATHER';

export function fetchCalendar(maxResults = 10) {
    const url = `${ROOT_URL}/journey/sample?maxResults=${maxResults}`;
    const resp = axios.get(url);

    return {
        type: FETCH_CALENDAR,
        payload: resp
    };
}

export function fetchWeather(city, countryCode) {
    const url = `${OPEN_WEATHER_URL}&q=${city}&cnt=10`;
    const request = axios.get(url);             // Returns a promise

    // ReduxPromise middlewire (../components/app.js) resolves the promise, creates a new Action
    // (with json data in the same payload) and send it to reducers
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}