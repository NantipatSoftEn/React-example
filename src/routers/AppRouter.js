import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';
import Dashbord from '../components/Dashbord';
const AppRouter = () => (
    <div>
        <Dashbord />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default AppRouter;
