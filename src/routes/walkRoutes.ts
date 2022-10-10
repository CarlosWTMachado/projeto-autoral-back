import { Router } from 'express';
import walkController from '../controllers/walkController';
import validateToken from '../middlewares/validateToken';
import schemaValidate from '../middlewares/handleSchemas';
import walkSchema from '../schemas/walkSchema';

const walkRouter = Router();

walkRouter.post('/walk', validateToken, schemaValidate(walkSchema), walkController.create);
walkRouter.get('/walks', validateToken, walkController.get);
walkRouter.get('/completedWalks', validateToken, walkController.getCompleted);

export default walkRouter;