import { FETCH_CALENDAR} from "../actions/index";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_CALENDAR:
            return [...state, ...action.payload.data];
        default:
            return state;
    }
}