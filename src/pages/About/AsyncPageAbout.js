import React from 'react';
import Loadable from 'react-loadable';

const AsyncPageAbout = Loadable({
  loader: () => import(/* webpackChunkName: "pageAbout" */ './PageAbout'),
  loading: () => <div>loading another page...</div>,
  modules: ['pageAbout'],
});

export default AsyncPageAbout;
