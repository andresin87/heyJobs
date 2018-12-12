import React, { PureComponent } from 'react'
import connect from 'react-redux/es/connect/connect';
import { withRouter } from 'react-router';
import Loader from '../../components/Loader/Loader';
import fetchHelper from '../../helpers/fetchHelper';

import { setJob } from '../../store/appActions';
import { gettingJob } from '../../data/connector';

const STATUS = {
  LOADING: 'LOADING',
  READY: 'READY',
  ERROR: 'ERROR',
};

class PageJob extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: STATUS.LOADING,
      data: [],
    };
    this.renderJob = this.renderJob.bind(this);
  }
  
  async componentWillMount() {
    try {
      const data = await fetchHelper(gettingJob, [parseInt(this.props.match.params.jobId, 10), 800],  200);
      this.props.setJob(data);
      this.setState({
        status: STATUS.READY,
      });
    } catch (error) {
      this.setState({
        status: STATUS.ERROR,
      });
    }
  }
  
  renderJob() {
    const { job } = this.props;
    return (
      <React.Fragment>
        <h1>{job.title}</h1>
        <h4>{job.employment_type}</h4>
        <p>{job.description}</p>
      </React.Fragment>
    );
  }
  
  render() {
    const { status } = this.state;
    return (
      <div className="page">
        <Loader
          isLoading={status === STATUS.LOADING}
        >
          <section className="section-job">
            {this.renderJob()}
          </section>
        </Loader>
      </div>
    );
  }
}

PageJob.defaultProps = {
  job: {},
};

export default withRouter(connect(
  (state) => ({
    job: state.app.job,
  }),
  (dispatch) => ({
    setJob: (data) => { dispatch(setJob(data)); },
  }),
)(PageJob));
