import React from 'react';
import Loadable from 'react-loadable';

const AsyncPageDefault = Loadable({
  loader: () => import(/* webpackChunkName: "pageDefault" */ './PageDefault'),
  loading: () => <div>loading default page...</div>,
  modules: ['pageDefault'],
});

export default AsyncPageDefault;
