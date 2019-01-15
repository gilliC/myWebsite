import {FETCH_LIST} from '../actions';
import {linksList} from '../../services/dataBase';

export default function(state = linksList, action) {
  switch (action.type) {
    case FETCH_LIST:
      return state;

    default:
      return state;
  }
}
