import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import contactReducer from './contactReducer';
import loadingReducer from './loadingReducer';
import headerReducer from './headerReducer';
import mediaReducer from './mediaReducer';

export default combineReducers({
    loading: loadingReducer,
    contact: contactReducer,
    header: headerReducer,
    form: formReducer,
    media: mediaReducer
});