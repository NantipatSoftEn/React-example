import {createStore,combineReducers} from "redux";
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


const fName = () => {
    return {
        type:"setName",
        name:"pyp"
    }
}

const fAge = () => {
    return {
        type:"setAge",
        age: 18
    }
}

const fShow = ({name ='mylove',age=0} = {} ) => {
    return {
        type:"show",
        name:name,
        age:age
    }
}

const initialState = {
    result:1500,
    value:[],
}

// let obj = {money: 1000};
// let {money: a} = obj;
const reducer_copy = (state = {name:"arm",age:22},action) => {
    switch (action.type) {
        case "show":
            return{
                name:action.name,
                age:action.age
            };
        case "setName":
            return{

                name:action.name
            };

        case "setAge":
            state = {
                age:action.age
            };
        break;
        default:
    }
    return state;
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

const store = createStore(combineReducers({recuder,reducer_copy}));

store.subscribe(() => {
    console.log("Update Store",store.getState());
})


store.dispatch(fADD({money:50}));

store.dispatch(fSUB());

store.dispatch(fADD());

store.dispatch(fName());

store.dispatch(fAge());

store.dispatch(fShow());
