import { Router } from 'express';
import authController from '../controllers/authController';
import schemaValidate from '../middlewares/handleSchemas';
import signUpSchema from '../schemas/signUpSchema';

const authRouter = Router();

authRouter.post('/signup', schemaValidate(signUpSchema), authController.signUp);

export default authRouter;