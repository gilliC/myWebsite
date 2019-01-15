import {CHANGE_ACTIVE_ITEM} from '../actions';
import {linksList} from '../../services/dataBase';

export default function(state = {item: linksList[0]}, action) {
  switch (action.type) {
    case CHANGE_ACTIVE_ITEM:
      return {
        ...state,
        item: action.payload,
      };

    default:
      return state;
  }
}
