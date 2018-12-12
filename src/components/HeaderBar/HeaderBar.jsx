import React  from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

import heyJobs from '../../heyJobs.svg';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
};

const WrapperContent = styled.div`
  padding: 10px;
`;

const HeaderBar = props => {
  const { classes } = props;
  return (
    <div className="App-bar">
      <div className={classes.root}>
        <AppBar position="fixed" color="default">
          <WrapperContent>
            <a className={classes.grow} href="https://www.heyjobs.co" target="_blank" rel="noreferrer noopener">
              <img src={heyJobs} alt="heyJobs" />
            </a>
          </WrapperContent>
        </AppBar>
      </div>
    </div>
  );
};

export default withStyles(styles)(HeaderBar);