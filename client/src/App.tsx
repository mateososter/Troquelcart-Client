import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;
