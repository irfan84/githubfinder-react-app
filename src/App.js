import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import User from "./components/users/User";

// Redux
import { Provider } from 'react-redux';
import store from "./store";

const App = () => {
  return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/users/:login' component={User} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
  );
};

export default App;
