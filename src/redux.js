import {createStore} from 'redux';

const incrementCount = () =>{
    return{
        type: 'INCREMENT'
    };
};
const store = createStore((state = {count:0},action) => {
    console.log('running...');
    switch (action.type) {
        case 'INCREMENT':
        const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy:1;
            return {
                count :state.count + incrementBy
            };
        case 'DECREMENT':
        const decrementBy = typeof action.decrementBy === 'number'  ? action.decrementBy:1
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

console.log(store.getState());

store.dispatch({
    type :'INCREMENT',
    incrementBy:6
});

store.dispatch(incrementCount());

console.log(store.getState());
store.dispatch({
    type :'DECREMENT',
    decrementBy:5
});
console.log(store.getState());
