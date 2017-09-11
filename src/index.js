// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import Footer from  './set/Footer';
// import Header from  './set/Header';
// import Content from './set/Content';
//
// import registerServiceWorker from './registerServiceWorker';
//
// import {BrowserRouter,Route,Link} from 'react-router-dom';
//
// ReactDOM.render(
//  <BrowserRouter>
//     <div>
//     <ul>
//
//         <li><Link to="/header">Header</Link></li>
//         <li><Link to="/content">Content</Link></li>
//         <li><Link to="/footer">Footer</Link></li>
//     </ul>
//     <Route exact path="/" component={App} />
//
//     <Route path="/header" component={Header} />
//     <Route path="/content" component={Content}/>
//     <Route path="/footer" component={Footer}/>
//     </div>
// </BrowserRouter>,
// document.getElementById('root'));﻿
// registerServiceWorker();
import {createStore} from "redux";

const reducder = (state,action)=>{
    switch (action.type) {
        case "ADD":
            state += action.playload;
        break;
        case "SUBTRACK":
            state -= action.playload;
        break;
        default:

    }
    return state;
}
const store = createStore(reducder ,15000);
store.subscribe(function(){
    console.log("Update Store",store.getState());
});

store.dispatch({
    type:"ADD",
    playload:500
});
