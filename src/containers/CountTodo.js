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


// กำลังจะใส่ mapStateToProps แต่คิดไม่ออกที...
const mapStateToProps =  state  => {
    return {
        counters: state.counters
    }
}

CountTodo = connect()(CountTodo)
export default CountTodo
