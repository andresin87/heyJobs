import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Switch, NavLink } from 'react-router-dom';

import AsyncHeaderBar from './components/HeaderBar/AsyncHeaderBar'
import AsyncPageDefault from './pages/Default/AsyncPageDefault';
import AsyncPageAbout from './pages/About/AsyncPageAbout';
import AsyncPageJobs from './pages/Jobs/AsyncPageJobs';
import AsyncPageJob from './pages/Job/AsyncPageJob';

import { setMessage } from './store/appActions';

import './App.css';

class App extends Component {
  componentDidMount() {
    if(!this.props.data) {
      this.props.updateMessage("Hi, I'm from client!");
    }
  }

  render() {
    return (
      <div className="App">
        <AsyncHeaderBar />
        <div className="App-intro">
          <h2>Menu</h2>
          <nav>
            <NavLink to="/" exact activeClassName="active">Task</NavLink>
            <NavLink to="/jobs" activeClassName="active">Jobs page</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
          </nav>
          <Switch>
            <Route path="/" exact component={AsyncPageDefault} />
            <Route path="/about" component={AsyncPageAbout} />
            <Route path="/jobs" component={AsyncPageJobs} />
            <Route path="/job/:jobId" component={AsyncPageJob} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ app }) => ({
      message: app.message,
    }),
    dispatch => ({
      updateMessage: (messageText) => dispatch(setMessage(messageText)),
    })
  )(App)
);
