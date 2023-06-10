import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import PreviousWork from './Pages/PreviousWork';

const App = () => {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/Portfolio" component={PreviousWork} /> {/* Add the route for the AboutPage */}
      </Switch>
    </Router>

     
    </div>
  );
};

export default App;
