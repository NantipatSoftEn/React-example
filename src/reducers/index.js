import {combineReducers} from 'redux';
import todos from './todos';

const todoapp = combineReducers({
    todos
})

export default todoApp
