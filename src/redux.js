import {createStore} from 'redux';


const incrementCount = ({incrementBy = 1} = {}) =>{
    return{
        type: 'INCREMENT',
        incrementBy
    };
};
const resetCount = () =>{
    return{
        type: 'RESET',
    };
};
const decrementCount = ({decrementBy  = 1 } = {}) =>{
    return{
        type: 'DECREMENT',
        decrementBy
    };
};

const init = {
    count:0
}
const countReducer = (state = init,action) => {
    console.log('running...');
    switch (action.type) {
        case 'INCREMENT':
        //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy:1;
            return {
                count :state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count :state.count - action.decrementBy
            };
        case 'RESET':
            return {
                count :0
            };
            default:
                return state;
    }
};

const store = createStore(countReducer);


store.subscribe(() => {
    console.log('subscribe');
    console.log(store.getState());
});

// Refactoring Code

// console.log(store.getState());
//
// store.dispatch({
//     type :'INCREMENT',
//     incrementBy:6
// });

store.dispatch(incrementCount({ incrementBy:10}));



store.dispatch(decrementCount({ decrementBy:2}));


store.dispatch(resetCount());


store.dispatch(decrementCount({ decrementBy:2}));
