import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // return  state.concat([action.payload.data]); // creates a new instance of state array (collect city data)
            return [action.payload.data, ...state];  // same adobe
    }
    return state;
}