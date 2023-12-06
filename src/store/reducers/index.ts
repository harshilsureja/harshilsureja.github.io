import { combineReducers } from 'redux';
import { resumeReducer } from './resume.reducer';
import themeReducer from './slice/theme';

const rootReducer = combineReducers({
  resumeReducer,
  themeReducer,
});

export default rootReducer;
