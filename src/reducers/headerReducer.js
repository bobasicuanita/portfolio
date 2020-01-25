import {
    ADD_START_CLASS,
    ADD_ABOUTME_CLASS,
    ADD_TALENTS_CLASS,
    ADD_PROJECTS_CLASS,
    ADD_CONTACT_CLASS,
    REMOVE_START_CLASS,
    REMOVE_ABOUTME_CLASS,
    REMOVE_TALENTS_CLASS,
    REMOVE_PROJECTS_CLASS,
    REMOVE_CONTACT_CLASS
} from "../actions/types";

const INITIAL_STATE = {
    startClassName: 'list-item',
    aboutmeClassName: 'list-item',
    talentsClassName: 'list-item',
    projectsClassName: 'list-item',
    contactClassName: 'list-item'
};

export default(state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_START_CLASS:
            return {...state , startClassName: 'list-item active' }
        case ADD_ABOUTME_CLASS:
            return {...state , aboutmeClassName: 'list-item active' }
        case ADD_TALENTS_CLASS:
            return {...state , talentsClassName: 'list-item active' }
        case ADD_PROJECTS_CLASS:
            return {...state , projectsClassName: 'list-item active' }
        case ADD_CONTACT_CLASS:
            return {...state , contactClassName: 'list-item active' }
        case REMOVE_START_CLASS:
            return {...state , aboutmeClassName: 'list-item', talentsClassName: 'list-item', projectsClassName: 'list-item', contactClassName: 'list-item' };
        case REMOVE_ABOUTME_CLASS:
            return {...state , startClassName: 'list-item', talentsClassName: 'list-item', projectsClassName: 'list-item', contactClassName: 'list-item' };
        case REMOVE_TALENTS_CLASS:
            return {...state , startClassName: 'list-item', aboutmeClassName: 'list-item', projectsClassName: 'list-item', contactClassName: 'list-item' };
        case REMOVE_PROJECTS_CLASS:
            return {...state , startClassName: 'list-item', aboutmeClassName: 'list-item', talentsClassName: 'list-item', contactClassName: 'list-item'  };
        case REMOVE_CONTACT_CLASS:
            return {...state , startClassName: 'list-item', aboutmeClassName: 'list-item', talentsClassName: 'list-item', projectsClassName: 'list-item' };
        default:
            return state;
    }
};