import {combineReducers} from 'redux';
import activeItemReducer from './Links/reducers/active_item_reducer';
import listReducer from './Links/reducers/list_reducer';

export default combineReducers({
  list: listReducer,
  activeList: activeItemReducer,
});
