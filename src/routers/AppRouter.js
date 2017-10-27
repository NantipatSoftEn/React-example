import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibilityFilter from '../containers/VisibleTodoList';
import Footer from '../components/Footer';

const AppRouter = () => (
    <div>
        <AppTodo />
        <VisibilityFilter />
        <Footer />
    </div>
);

export default AppRouter;
