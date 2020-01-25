import {
    START_LOADING, CHANGE_LOCATION, GET_LOCATION
} from "../actions/types";

const INITIAL_STATE = {
    loadingWidth: 0,
    firstload: true,
    location: '/'
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case START_LOADING:
            return {...state, loadingWidth: action.payload };
        case CHANGE_LOCATION:
            return {...state, firstload: false };
        case GET_LOCATION:
            return {...state, location: action.payload };
        default:
            return state;
    }
};