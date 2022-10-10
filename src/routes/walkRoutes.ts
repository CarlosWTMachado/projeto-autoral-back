import { Router } from 'express';
import walkController from '../controllers/walkController';
import validateToken from '../middlewares/validateToken';

const walkRouter = Router();

walkRouter.get('/walks', validateToken, walkController.get);
walkRouter.get('/completedWalks', validateToken, walkController.getCompleted);

export default walkRouter;