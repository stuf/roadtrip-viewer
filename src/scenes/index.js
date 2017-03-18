// @flow
import React from 'karet';
import {
  Router,
  Route,
  NavLink
} from 'react-router-dom';

// import RoutePage from './route';

export default () =>
  <Router>
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/routes">Routes</NavLink>
      </nav>

      <Route exact path="/" component={() => {}} />
    </div>
  </Router>;
