import express from 'express';
import kenx from './database/connection';

const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('API ON');
});

routes.get('/items', async (req, res) => {
  const items = await kenx('items').select('*');

  const serializedItems = items.map((item) => ({
    title: item.title,
    image_url: `http://localhost:3333/uploads/${item.image}`,
  }));

  return res.json(serializedItems);
});

export default routes;
