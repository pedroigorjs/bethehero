import { Router } from 'express';

import NgoController from './app/controllers/NgoController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoController.store);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.store);
routes.delete('/incidents/:id', IncidentController.destroy);

routes.get('/profiles', ProfileController.index);

routes.post('/sessions', SessionController.store);

export default routes;
