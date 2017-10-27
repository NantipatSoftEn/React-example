import {combineReducers , createStore} from 'redux';
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibilityFilter';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: todos,
      filters: visibilityFilter
    })
  );

  return store;
};
