import React from 'react';
import './App.css';
import NavBar from './Components/navbar';
import {Route} from 'react-router-dom';
import MacNavBar from './Components/macnavbar';
import Home from './Components/home'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route path='/MacNavBar' component={MacNavBar} />
      </header>
    </div>
  );
}

export default App;
