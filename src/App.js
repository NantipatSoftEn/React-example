import React, { Component } from 'react';
import Footer from  './set/Footer';
import Header from  './set/Header';
import Content from  './set/Content';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Footer/>
        <Header/>
        <Content name="Send value form App.js" tile="this is title"/>
        <Footer/>
      </div>
    );
  }
}





export default App;
