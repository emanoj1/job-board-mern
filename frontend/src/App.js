// Main Application Component

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import JobForm from './components/JobForm';
import HomePage from './components/HomePage';
import AdminPanel from './components/AdminPanel';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <a href="/">Home</a>
          <a href="/submit">Submit Job</a>
          <a href="/admin">Admin Panel</a>
        </nav>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/submit" component={JobForm} />
          <Route path="/admin" component={AdminPanel} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


