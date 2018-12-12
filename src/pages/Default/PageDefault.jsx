import React from 'react';

export default () => (
    <div className="page">
      <h3>HeyJobs React Assessment Task</h3>
      <p>Thank you for taking the time to complete this test task! The purpose of the task is to get an idea of your development style: the way you structure code, testing strategy, etc.</p>
      <h4> Requirements</h4>
      <p>Build a React application which:</p>
      <ul>
        <li>Displays a list of available jobs</li>
        <li>When clicking on a job, user is presented with job details page.</li>
        <li>The app should be server-rendered.</li>
        <li>The app should be responsive.</li>
        <li>Create and use dummy data for the list of jobs. We suggest the following format</li>
      </ul>
      {
        JSON.stringify([{
          "id": 1,
          "title": "Frontend Developer",
          "description": "Comfortable with modern JS stack, experience with React.",
          "employment_type": "full_time"
        }], null, 4)
      }
      <p>We encourage using following libraries and tools</p>
      <ul>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/reactjs/redux">Redux</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/ReactTraining/react-router">React Router</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/styled-components/styled-components">Styled Components</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/mui-org/material-ui">Material-UI</a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/create-react-app">Create React App</a></li>
      </ul>
    </div>
);
