import { Router } from 'express';

const route = new Router();

route.get('/', (req, res) => {
  res.send('Hello World');
});

export default route;
