import { CHANGE_FILTER } from '../actions/filter_action';

const filterReducer = (state = { filter: '' }, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return {
        filter: action.payload,
      };
    default: return state;
  }
};

export default filterReducer;
