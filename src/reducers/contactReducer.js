import {
    GET_FOCUS,
    GET_BLUR
} from "../actions/types";

const INITIAL_STATE = {
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    nameValid: false,
    emailValid: false,
    subjectValid: false,
    messageValid: false,
    type: "button",
    reference: []
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_FOCUS:
            return { ...state, [action.payload]: '' };
        case GET_BLUR:
            return { ...state, name: 'Name', email: 'Email', subject: 'Subject', message: 'Message' };
        default:
            return state;
    }
};