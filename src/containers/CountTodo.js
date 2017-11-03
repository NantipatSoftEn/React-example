import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import {increment,decrement,reset} from '../actions'
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

            <Button
                OnIncrement={() => dispatch(reset())}
                name="RESET"/>
        </div>
    )
}


CountTodo = connect()(CountTodo)
export default CountTodo
