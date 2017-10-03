import { createStore, combineReducers} from 'redux';



const addExpense = () => ({
    
})
const expensesReducerDefaultState = [];

const  expensesReducer = (state = [],action) => {
    switch (action.type) {
        default:
        return state;

    }
};

 // Filters Reducers
 // text

const filtersReducerDefaultState = {
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
};
const filtersReducer = (state = filtersReducerDefaultState,action ) => {
    switch (action.type) {
        default:
            return state;
    }
};

 // Store creation
 const store = createStore(
     combineReducers({
         expenses:expensesReducer,
         filters:filtersReducer
     })
 );

 console.log(store.getState());


const demoState ={
    expenses: [{
        id:'poijasdfhwer',
        description:'Jabuary Rent',
        note:'This was the final',
        amount:54500,
        createdAt:0
    }],
    filter:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
};
