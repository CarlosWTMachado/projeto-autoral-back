import { Router } from 'express';
import authController from '../controllers/authController';
import schemaValidate from '../middlewares/handleSchemas';
import signUpSchema from '../schemas/signUpSchema';
import signInSchema from '../schemas/signInSchema';

const authRouter = Router();

authRouter.post('/signup', schemaValidate(signUpSchema), authController.signUp);
authRouter.post('/signin', schemaValidate(signInSchema), authController.signIn);

export default authRouter;