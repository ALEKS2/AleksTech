import { combineReducers } from 'redux';

import librariesReducer from './librariesReducer';
import SelectionReducer from './SelectionReducer';
const rootReducer = combineReducers({
  libraries: librariesReducer,
  selectedLibraryId: SelectionReducer
});

export default rootReducer;
