import {CHANGE_ACTIVE_ITEM,FETCH_ACTIVE_ITEM} from '../actions';
import {linksList} from '../../dataBase';


export default function (state = {item:linksList[0]}, action) {
    switch (action.type) {
        case CHANGE_ACTIVE_ITEM:
            console.log("CHANGE_ACTIVE_ITEM");

            return {
                ...state,
                item: action.payload
            };
        case FETCH_ACTIVE_ITEM:
            console.log("FETCH_ACTIVE_ITEM");
            return state;


        default:
            return state;


    }

}