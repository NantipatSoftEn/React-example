let nextTodoId = 0;
let countItem = 1;
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
    type: 'INCREMENT'

  }
}

export const decrement = ()  => {
  return {
    type: 'DECREMENT'
  }
}

export const  reset = ()  => {
  return {
    type: 'RESET_COUNTERS',
  }
}

export const  plus = p  => {
  return {
    type: 'PLUS_COUNTERS',
    p
  }
}
