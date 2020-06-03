import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsCOntroller = new ItemsController();

routes.get('/', (req, res) => {
  res.send('API ON');
});

routes.get('/items', itemsCOntroller.index);

routes.post('/points', pointsController.create);

export default routes;
