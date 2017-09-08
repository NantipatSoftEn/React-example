import React, { Component } from 'react';
import Footer from  './Footer';
import Header from  './Header';
import Content from  './Content';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Footer/>
        <Header/>
        <Content name="Dsddd"/>
        <Footer/>
      </div>
    );
  }
}





export default App;
