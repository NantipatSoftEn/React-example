import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';
import Test from '../components/Test';
const AppRouter = () => (
    <div>
        <Test />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
);

export default AppRouter;
