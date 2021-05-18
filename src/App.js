import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Load from './pages/Load/Load';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path = '/' component={Load} />
          <Route exact path = '/portfolio' component={Portfolio} />
          <Route exact path = '/contact' component={Contact} />
          <Route exact path = '/home' component={Home} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
