import React  from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const JobContainer = styled.div`
  padding: 10px;
  width: 100%;
`;

const WrapperContainer = styled.div`
  margin: 10px
`;

const CardJob = (props) => (
  <WrapperContainer>
    <Link
      styles={{ textDecoration: 'none' }}
      to={`/job/${props.id}`}
    >
      <Card>
        <JobContainer>
          <Typography color="textPrimary" gutterBottom>
            {props.title}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            {props.employment_type}
          </Typography>
        </JobContainer>
      </Card>
    </Link>
  </WrapperContainer>
);

export default CardJob;