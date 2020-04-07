import { Router } from 'express';
import * as bookingController from './controllers';
import * as advancedSearchController from './controllers';
import * as heroController from './controllers';

export default app => {
  const rootRoutes = Router();
  const apiRouter = Router();

  rootRoutes.get('/', (req, res) => {
    return res.end('TypeScript Express');
  });

  /**
   * Angular Booking Application
   */
  apiRouter.post('/booking/apply', bookingController.apply);
  apiRouter.get('/booking/books', bookingController.getAll);
  apiRouter.get('/booking/book/:id', bookingController.getById);

  apiRouter.get('/search/address', advancedSearchController.getAddressByPostCode);

  /**
   * Angular Tour of heroes
   */
  apiRouter.get('/heroes', heroController.getHeroes);
  apiRouter.get('/heroes/:id', heroController.getHeroById);
  apiRouter.post('/heroes', heroController.applyHero);

  app.use('/', rootRoutes);
  app.use('/v1', apiRouter);
};
