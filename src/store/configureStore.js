import {combineReducers , createStore,applyMiddleware} from 'redux';
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibilityFilter';

const mylogger = store => next => action =>{
    console.log("Log Action",action);
    next(action);
}

const middlewares = applyMiddleware(mylogger)
export default () => {
  const store = createStore(
    combineReducers({
       todos,
       visibilityFilter
   }),
   {},
   middlewares
  );

  return store;
};
