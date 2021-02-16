import CHANGE_PAGINATION from './pagination_action_types';

const changePagination = start => ({
  type: CHANGE_PAGINATION,
  payload: start,
});
export default changePagination;
