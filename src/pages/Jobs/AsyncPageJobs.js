import React from 'react';
import Loadable from 'react-loadable';

const AsyncPageJobs = Loadable({
  loader: () => import(/* webpackChunkName: "pageJobs" */ './PageJobs'),
  loading: () => <div>loading jobs page...</div>,
  modules: ['pageJobs'],
});

export default AsyncPageJobs;
