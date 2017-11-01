import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';
import Dashbord from '../containers/Dashbord';

import BtnTodo from '../containers/BtnTodo'
const AppRouter = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Dashbord />
        <BtnTodo />
    </div>
);

export default AppRouter;
