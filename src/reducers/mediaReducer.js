import { CHANGE_WIDTH } from '../actions/types';

const INITIAL_STATE = {
    width: 4
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CHANGE_WIDTH:
            return {...state, width: action.payload };
        default:
            return state;
    }
};