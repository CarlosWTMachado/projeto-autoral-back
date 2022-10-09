import { Router } from 'express';
import walkerController from '../controllers/walkerController';
import schemaValidate from '../middlewares/handleSchemas';
import walkerSchema from '../schemas/walkerSchema';
import validateToken from '../middlewares/validateToken';

const walkerRouter = Router();

walkerRouter.post('/walker/register', validateToken, schemaValidate(walkerSchema), walkerController.register);
walkerRouter.get('/walker/:id', validateToken, walkerController.get);
// petRouter.get('/pet/:id', validateToken, petController.getById);
// petRouter.put('/pet/:id', validateToken, schemaValidate(petSchema), petController.update);
// petRouter.delete('/pet/:id', validateToken, petController.delete);

export default walkerRouter;