import {createStore} from "redux";
const fADD = ({money = 100} = {}) => {
    return {
        type:"ADD",
        money:money
    }
}

const fSUB = () => {
    return {
        type:"SUB",
        money:500
    }
}

const initialState = {
    result:1500,
    value:[],
}

// let obj = {money: 1000};
// let {money: a} = obj;

const recuder = (state = initialState,action) => {
    switch (action.type) {
        case "ADD":
            return{
                result:state.result+=action.money,
                value:[action.money]
            };

        case "SUB":
        state = {
                result:state.result-=action.money,
                value:[action.money]
        };
        break;
        default:
    }
    return state;
}

const store = createStore(recuder);

store.subscribe(() => {
    console.log("Update Store",store.getState());
})


store.dispatch(fADD({money:50}));

 store.dispatch(fSUB());


 store.dispatch(fADD());
