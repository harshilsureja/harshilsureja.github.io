import { combineReducers } from 'redux';
import { resumeReducer } from './resume.reducer';

const rootReducer = combineReducers({
  data: resumeReducer,
});

export default rootReducer;
