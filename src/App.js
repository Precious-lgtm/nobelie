import React from "react";
import Header from './components/header';
import Hero from './components/hero';
import Body from './components/body';
import './App.css';

function App(props) {
  return (
    <div className = 'mainContainer'>
        <Header />
        <Hero />
        <Body />
    </div>
  );
}

export default App;

