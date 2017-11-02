import React from 'react'
import { connect } from 'react-redux'
import IncrementButton from '../components/IncrementButton'
import {increment} from '../actions'

let  CountTodo = ({ dispatch }) =>{
    return (
        <div>
            <IncrementButton  OnIncrement={() => dispatch(increment())}/>
        </div>
    )
}
CountTodo = connect()(CountTodo)
export default CountTodo
