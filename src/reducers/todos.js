const todos = (state = [] ,action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,{
                    id:action.id,
                    text:action.text,
                    completed:false,
                    countItem:action.countItem
                }
            ]
        case 'TOGGLE_TODO':
          return state.map(todo => (todo.id === action.id)
              ? {...todo, completed: !todo.completed}
              : todo
          )
        case 'INCREMENT' :
          return state + 1
        case 'DECREMENT':
          return state - 1
        default:
          return state
    }
}
export default todos
