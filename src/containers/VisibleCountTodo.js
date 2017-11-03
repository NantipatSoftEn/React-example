import { connect } from 'react-redux'

import CurrentCount from '../components/CurrentCount'
import {plus} from '../actions'


const mapStateToProps = state => {
  return {
    counters: state.counters
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        p : number => {dispatch(plus(number))}
    }
}



const VisibleCountTodo = connect(mapStateToProps,mapDispatchToProps)(CurrentCount)

export default VisibleCountTodo
