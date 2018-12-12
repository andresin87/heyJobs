import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Switch, NavLink } from 'react-router-dom';

import AsyncHeaderBar from './components/HeaderBar/AsyncHeaderBar'
import AsyncPageDefault from './pages/Default/AsyncPageDefault';
import AsyncPageAbout from './pages/About/AsyncPageAbout';
import AsyncPageJobs from './pages/Jobs/AsyncPageJobs';
import AsyncPageJob from './pages/Job/PageJob';

import { setJob, setJobs, setMessage } from './store/appActions';

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
        <div>
          <AsyncHeaderBar />
        </div>
        <div>
          <div className="App-routing">
            <h2>Menu</h2>
            <nav>
              <NavLink to="/" exact activeClassName="active">Task</NavLink>
              <NavLink to="/jobs" activeClassName="active">Jobs page</NavLink>
              <NavLink to="/about" activeClassName="active">About</NavLink>
            </nav>
            <Switch>
              <Route path="/" exact component={AsyncPageDefault} />
              <Route path="/about" component={AsyncPageAbout} />
              <Route path="/jobs" render={() => <AsyncPageJobs jobs={this.props.jobs} setJobs={this.props.setJobs} />} />
              <Route path="/job/:jobId" render={() => <AsyncPageJob job={this.props.job} setJob={this.props.setJob} />} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    ({ app }) => ({
      message: app.message,
      jobs: app.jobs,
      job: app.job,
    }),
    dispatch => ({
      updateMessage: (messageText) => dispatch(setMessage(messageText)),
      setJobs: (data) => { dispatch(setJobs(data)); },
      setJob: (data) => { dispatch(setJob(data)); },
    })
  )(App)
);
