import CHANGE_PAGINATION from '../actions/pagination_action_types';

const initialState = {
  start: 0,
  limit: 30,
};

const PaginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGINATION:
      return {
        start: action.payload,
      };
    default: return state;
  }
};

export default PaginationReducer;
