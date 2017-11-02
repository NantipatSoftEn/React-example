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


// กำลังจะใส่ mapStateToProps แต่คิดไม่ออกที...


CountTodo = connect()(CountTodo)
export default CountTodo
