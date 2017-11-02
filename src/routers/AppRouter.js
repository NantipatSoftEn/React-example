import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Footer from '../components/Footer';
import Dashbord from '../containers/Dashbord';

import IncrementButton from '../components/IncrementButton';
const AppRouter = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Dashbord />
        
        <IncrementButton />
    </div>
);

export default AppRouter;
