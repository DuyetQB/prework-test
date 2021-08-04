import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'containers/HomePage';

export default function MyRouter() {
  return (
    <>
      <Router>
        <Switch>
          <Route exactpath="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
