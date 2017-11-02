import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import {increment} from '../actions'

let  CountTodo = ({ dispatch }) =>{
    return (
        <div>
            <Button OnIncrement={() => dispatch(increment())}/>
        </div>
    )
}
CountTodo = connect()(CountTodo)
export default CountTodo
