import { combineReducers } from 'redux';
import CalendarReducer from './reducer-calendar-api';

const rootReducer = combineReducers({
    calendarEvent: CalendarReducer
});

export default rootReducer;
