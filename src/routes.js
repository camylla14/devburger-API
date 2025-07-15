import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';

const routes = Router();

routes.post('/users', (req, res) => {
	UserController.store(req, res);
});

routes.post('/session', SessionController.store);

routes.post('/products', ProductController.store);

export default routes;
