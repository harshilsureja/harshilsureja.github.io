import { combineReducers } from 'redux';
import { resumeReducer } from './resume.reducer';

const rootReducer = combineReducers({
  resumeReducer,
});

export default rootReducer;
