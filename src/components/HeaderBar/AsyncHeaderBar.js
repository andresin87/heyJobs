import Loadable from 'react-loadable';

const AsyncHeaderBar = Loadable({
  loader: () => import(/* webpackChunkName: "HeaderBar" */ './HeaderBar'),
  loading: () => null,
  modules: ['HeaderBar'],
});

export default AsyncHeaderBar;
