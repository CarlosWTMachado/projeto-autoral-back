import { Router } from 'express';
import userController from '../controllers/userController';
import validateToken from '../middlewares/validateToken';

const userRouter = Router();

userRouter.get('/user', validateToken, userController.get);

export default userRouter;