import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
const todoapp = combineReducers({
    todos,
    visibilityFilter
})

export default todoApp
