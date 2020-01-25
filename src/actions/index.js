import {
    START_LOADING,
    CHANGE_LOCATION,
    GET_LOCATION,
    GET_FOCUS,
    GET_BLUR,
    ADD_START_CLASS,
    ADD_ABOUTME_CLASS,
    ADD_TALENTS_CLASS,
    ADD_PROJECTS_CLASS,
    ADD_CONTACT_CLASS,
    REMOVE_START_CLASS,
    REMOVE_ABOUTME_CLASS,
    REMOVE_TALENTS_CLASS,
    REMOVE_PROJECTS_CLASS,
    REMOVE_CONTACT_CLASS,
    CHANGE_WIDTH
} from './types';

export const startLoading = progress => {
    return {
        type: START_LOADING,
        payload: progress
    };
};

export const getLocation = location => {
    return {
        type: GET_LOCATION,
        payload: location
    }
}

export const changeLocation = () => {
    return {
        type: CHANGE_LOCATION
    };
};

export const getFocus = input => {
    return {
        type: GET_FOCUS,
        payload: input
    };
};

export const getBlur = () => {
    return {
        type: GET_BLUR
    };
};

export const addStartClass = () => {
    return {
        type: ADD_START_CLASS
    }
};

export const addAboutmeClass = () => {
    return {
        type: ADD_ABOUTME_CLASS
    }
};

export const addTalentsClass = () => {
    return {
        type: ADD_TALENTS_CLASS
    }
};

export const addProjectsClass = () => {
    return {
        type: ADD_PROJECTS_CLASS
    }
};

export const addContactClass = () => {
    return {
        type: ADD_CONTACT_CLASS
    }
};

export const removeStartClass = () => {
    return {
        type: REMOVE_START_CLASS
    }
};

export const removeAboutmeClass = () => {
    return {
        type: REMOVE_ABOUTME_CLASS
    }
};

export const removeTalentsClass = () => {
    return {
        type: REMOVE_TALENTS_CLASS
    }
};

export const removeProjectsClass = () => {
    return {
        type: REMOVE_PROJECTS_CLASS
    }
};

export const removeContactClass = () => {
    return {
        type: REMOVE_CONTACT_CLASS
    }
};

export const changeWidth = size => {
    return {
        type: CHANGE_WIDTH,
        payload: size
    }
}