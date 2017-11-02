import { connect } from 'react-redux'

import CurrentCount from '../components/CurrentCount'



const mapStateToProps = state => {
  return {
    counters: state.counters
  }
}



const VisibleCountTodo = connect(mapStateToProps)(CurrentCount)

export default VisibleCountTodo
