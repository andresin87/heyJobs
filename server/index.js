import express from 'express';
import Loadable from 'react-loadable';

import indexController from './controllers/index';
import { PORT } from './constants';

// initialize the application and create the routes
const app = express();

app.use(indexController);

// start the app
Loadable.preloadAll().then(() => {
  app.listen(PORT, (error) => {
    if (error) {
      return console.log('something wrong happened', error);
    }
    
    console.log(`listening on ${PORT} ...`);
  });
});
