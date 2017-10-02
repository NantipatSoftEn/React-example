import {createStore} from "redux";

const recuder = (state,action) => {
    switch (action.type) {
        case "ADD":
            state+=action.money;
        break;
        case "SUB":
            state-=action.money;
        break;
        default:
    }
    return state;
}
const store = createStore(recuder,1500);
store.subscribe(() => {
    console.log("Update Store",store.getState());
})
store.dispatch({
    type:"ADD",
    money:500
});
