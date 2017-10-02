import {createStore} from 'redux';

const store = createStore((state = {count:0},action) => {
    console.log('running...');
    switch (action.type) {
        case 'INCREMENT':
            return {
                count :state.count + 1
            };
        case 'DECREMENT':
            return {
                count :state.count - 1
            };
        case 'RESET':
            return {
                count :0
            };
            default:
                return state;
    }
});

store.subscribe(() => {
    console.log('subscribe');
    console.log(store.getState());
});

console.log(store.getState());

store.dispatch({
    type :'INCREMENT'
});

store.dispatch({
    type :'DECREMENT'
});





console.log(store.getState());
