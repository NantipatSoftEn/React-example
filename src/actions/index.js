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


export const clickTodo = interrub  => {
  return {
    type: 'CLICK_TODO',
    interrub
  }
}
