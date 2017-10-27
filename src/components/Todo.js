import React from 'react';

const  Todo = ({onClick,completed,text}) => (
  <li onClick={onClick}
  style= {{ textDecoration :
      completed ?  'line-through' :'none'}}>
      {text}
  </li>
)


Todo.propType = {
    onClick: PropType.func.isRequired,
    completed: PropType.bool.isRequired,
    text: PropType.String.isRequired
}
export default Todo;
