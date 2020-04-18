import { FETCH_CALENDAR} from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CALENDAR:
            if (action.payload.data.errors.length > 0) {
                console.log(action.payload.data.errors)
            }
            return [...state, ...action.payload.data.journeys];
        default:
            return state;
    }
}