import {createStore} from 'redux';

const incrementCount = (payload = {}) =>{
    return{
        type: 'INCREMENT',
        incrementBy: typeof payload.incrementBy === 'number' ?  payload.incrementBy:1
    };
};
const store = createStore((state = {count:0},action) => {
    console.log('running...');
    switch (action.type) {
        case 'INCREMENT':
        //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy:1;
            return {
                count :state.count + action.incrementBy
            };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number'  ? action.decrementBy:1;
            return {
                count :state.count - decrementBy
            };
        case 'RESET':
            return {
                count :0
            };
            default:
                return state;
    }
});


//
const unsubscribe = store.subscribe(() => {
    console.log('subscribe');
    console.log(store.getState());
});

unsubscribe();

// Refactoring Code
// console.log(store.getState());
//
// store.dispatch({
//     type :'INCREMENT',
//     incrementBy:6
// });
console.log(store.getState());
store.dispatch(incrementCount({ incrementBy:5}));

console.log(store.getState());
store.dispatch(incrementCount());

console.log(store.getState());
store.dispatch({
    type :'DECREMENT',
    decrementBy:5
});
console.log(store.getState());
