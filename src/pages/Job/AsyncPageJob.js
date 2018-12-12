import React from 'react';
import Loadable from 'react-loadable';

const AsyncPageJob = Loadable({
  loader: () => import(/* webpackChunkName: "pageJob" */ './PageJob'),
  loading: () => <div>loading job page...</div>,
  modules: ['pageJob'],
});

export default AsyncPageJob;
