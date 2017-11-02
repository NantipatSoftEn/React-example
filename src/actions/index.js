let nextTodoId = 0;
let countItem = 1;
let CountClick = 0;
export const addTodo  = text =>{
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        countItem: countItem++,
        text
    }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

// CountTodo
export const increment = ()  => {
  return {
    type: 'INCREMENT',
    OnClick: CountClick++
  }
}

export const decrement = ()  => {
  return {
    type: 'DECREMENT',
    OnClick: CountClick--
  }
}
