import { combineReducers } from 'redux';
import CalendarReducer from './reducer-calendar-api';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
    calendarEvent: CalendarReducer,
    weather: WeatherReducer
});

export default rootReducer;
