import { Router } from 'express';
import walkController from '../controllers/walkController';
import validateToken from '../middlewares/validateToken';

const walkRouter = Router();

walkRouter.get('/walks', validateToken, walkController.get);

export default walkRouter;