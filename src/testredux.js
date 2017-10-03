import {createStore} from "redux";
const fADD = () => {
    return {
        type:"ADD",
        money:500
    }
}

const initialState = {
    result:1500,
    value:[],
}

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


store.dispatch(fADD());

store.dispatch({
    type:"SUB",
    money:300
});


store.dispatch({
    type:"ADD",
    money:2000
});
