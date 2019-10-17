import axios from 'axios';

const ROOT_URL = `http://api.fibanez.com`;
// const ROOT_URL = `http://localhost:3000`;

export const FETCH_CALENDAR  = 'FETCH_CALENDAR';

export function fetchCalendar() {
    const url = `${ROOT_URL}/calendar/sample`;
    const resp = axios.get(url);

    return {
        type: FETCH_CALENDAR,
        payload: resp
    };
}