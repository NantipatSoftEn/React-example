import React from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import {increment,decrement} from '../actions'

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
const mapdispathToProps =  dispatch  => {
    return {

    }
}

CountTodo = connect()(CountTodo)
export default CountTodo
