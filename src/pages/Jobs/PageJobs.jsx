import React, { PureComponent } from 'react'
import Loader from '../../components/Loader/Loader';
import { connect } from 'react-redux';
import fetchHelper from '../../helpers/fetchHelper';
import styled from 'styled-components';

import { setJobs } from '../../store/appActions';
import { gettingJobs } from '../../data/connector';

import CardJob from '../../components/CardJob/CardJob';

const STATUS = {
  LOADING: 'LOADING',
  READY: 'READY',
  ERROR: 'ERROR',
};

const JobsContainer = styled.div`
  display: block;
  width: 100%;
`;

class PageJobs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      status: STATUS.LOADING,
    };
    this.renderCards = this.renderCards.bind(this);
  }
  
  async componentWillMount() {
    try {
      const data = await fetchHelper(gettingJobs, [800],  200);
      this.props.setJobs(data);
      this.setState({
        status: STATUS.READY,
      });
    } catch (error) {
      this.setState({
        status: STATUS.ERROR,
      });
    }
  }
  
  renderCards() {
    const { jobs }= this.props;
    return jobs.map(dataUnit => (<CardJob key={dataUnit.id} {...dataUnit} />));
  }
  
  render() {
    const { status } = this.state;
    return (
      <div className="page">
        <Loader
          isLoading={status === STATUS.LOADING}
        >
          <section className="section-header">
            <h1>JOBS</h1>
          </section>
          <section className="section-jobs">
            <JobsContainer>
              {this.renderCards()}
            </JobsContainer>
          </section>
        </Loader>
      </div>
    );
  }
}

PageJobs.defaultProps = {
  jobs: [],
};

export default connect(
  (state) => ({
    jobs: state.app.jobs,
  }),
  (dispatch) => ({
    setJobs: (data) => { dispatch(setJobs(data)); },
  }),
)(PageJobs);
