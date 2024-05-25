import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import BaliPage from './Bali';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/bali" component={BaliPage} />
      </Switch>
    </Router>
  );
}

export default App;