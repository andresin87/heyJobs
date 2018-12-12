import React  from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import styles from './Loader.styles';

const Loader = (props) => {
  const { classes } = props;
  return props.isLoading === true ? (
    <div className={classes.facebook}>
      <div>
        <CircularProgress
          variant="determinate"
          value={100}
          className={classes.facebook1}
          size={24}
          thickness={4}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.facebook2}
          size={24}
          thickness={4}
        />
      </div>
    </div>
  ) : props.children;
};

export default withStyles(styles)(Loader)