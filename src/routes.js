import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const router = new Router();
const upload = multer(multerConfig);

router.post('/sessions', SessionController.store);
router.post('/users', UserController.store);

router.use(authMiddleware);

router.put('/users', UserController.update);

router.post('/files', upload.single('file'), FileController.store);

export default router;
