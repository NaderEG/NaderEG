import React from 'react';
import Navbar from "./components/Navbar"
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Explore from './components/Explore'
import Order from './components/Order'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/explore' component={Explore}/>
        <Route path='/order' component={Order}/>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
