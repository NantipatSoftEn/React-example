const counters = (state = [] ,action) => {
    switch (action.type) {
        case 'INCREMENT' :
          return [
              ...state,{
                  CountClick:action.OnClick
              }
          ]
        default:
          return state
    }
}
export default counters
