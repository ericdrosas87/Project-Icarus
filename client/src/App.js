import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import Login from './component/Login'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Login/>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
