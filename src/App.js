import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Views/Home'
import Detail from './Views/Detail'

const App = () => {
  return (
    <div className="App">
      <Router>
          <Route path='/' component={Home} exact />
          <Route path='/detail/:uid' component={Detail} exact />
      </Router>
    </div>
  );
}

export default App;
