import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Test from './components/Test';
import Todo from './components/Todo';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';

const store =  configureStore();
ReactDOM.render(<AppRouter />,document.getElementById('app'));﻿
