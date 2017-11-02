import {combineReducers , createStore,applyMiddleware,compose} from 'redux';
import todos from '../reducers/todos';
import visibilityFilter from '../reducers/visibilityFilter';
import counters from '../reducers/counters';
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
   compose(
      middlewares,
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  return store;
};
