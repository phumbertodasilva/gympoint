import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);
routes.use(authMiddleware);

export default routes;
