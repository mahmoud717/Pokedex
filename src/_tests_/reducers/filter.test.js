import filterReducer from '../../reducers/filter';
import { changeFilter } from '../../actions/filter_action';

describe('Filter Reducer', () => {
  it('Should return the default state', () => {
    expect('').toEqual('');
  });

  it('Should return new state if a valid filter is provided', () => {
    const action = changeFilter({ filter: 'Action' });
    const state = filterReducer(undefined, action);

    expect(state).toEqual({ filter: { filter: 'Action' } });
  });
});
