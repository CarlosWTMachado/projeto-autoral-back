import { Router } from 'express';
import petController from '../controllers/petController';
import schemaValidate from '../middlewares/handleSchemas';
import petSchema from '../schemas/petSchema';
import validateToken from '../middlewares/validateToken';

const petRouter = Router();

petRouter.post('/pet', validateToken, schemaValidate(petSchema), petController.register);
// petRouter.get('/pet');
// petRouter.put('/pet');
// petRouter.delete('/pet');

export default petRouter;