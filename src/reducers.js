import {combineReducers} from 'redux';
import activeItemReducer from './Links/reducers/active_item_reducer';
import listReducer from './Links/reducers/list_reducer';


export default combineReducers({
    list: listReducer,
    activeItem: activeItemReducer,
});

// chartData : the name of the variable
// DataReducer: the value, which the reducer gives.