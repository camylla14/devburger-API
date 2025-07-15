import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';

const routes = Router();

const upload = multer(multerConfig);

routes.post('/users', (req, res) => {
	UserController.store(req, res);
});

routes.post('/session', SessionController.store);

routes.post('/products', upload.single('file'), ProductController.store);

export default routes;
