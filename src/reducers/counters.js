const counters = (state = 0 ,action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return state + 1
        case 'DECREMENT' :
            return state - 1
        case 'RESET_COUNTERS':
            return state = 0
        case 'PLUS_COUNTERS':
            return state + action.p
        default:
          return state
    }
}
export default counters
