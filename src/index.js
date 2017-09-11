import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Footer from  './set/Footer';
import Header from  './set/Header';
import Content from  './set/Content';

import App from './App';
import {Router,Route,Link,browserHistory} from  'react-router'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    // <App />,
    // document.getElementById('root')
    <Router history={browserHistory}>
    <Route path = '/'component={App} />
    <Route path = '/header'component={Header} />
    <Route path = '/content'component={Content} />
    <Route path = '/footer'component={Footer} />

    </Router>,document.getElementById('root')
);
registerServiceWorker();
