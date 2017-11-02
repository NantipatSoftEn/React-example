import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import {increment,decrement} from '../actions'
import CurrentCount from '../components/CurrentCount'
let  CountTodo = ({ dispatch }) =>{
    return (
        <div>
            <Button
                OnIncrement={() => dispatch(increment())}
                name="Increment"/>

            <Button
                OnIncrement={() => dispatch(decrement())}
                name="Decrement"/>
        </div>
    )
}


CountTodo = connect()(CountTodo)
export default CountTodo
