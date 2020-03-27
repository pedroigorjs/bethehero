import { Router } from 'express';

import NgoController from './app/controllers/NgoController';
import IncidentController from './app/controllers/IncidentController';
import ProfileController from './app/controllers/ProfileController';
import SessionController from './app/controllers/SessionController';

import { 
  NgoCreateValidator,
  ProfilesListValidator,
  IncidentsListValidator,
  IncidentsDeleteValidator,
  IncidentsCreateValidator,
  SessionsCreateValidator
} from './app/middlewares/validators'

const routes = new Router();

routes.get('/ngos', NgoController.index);
routes.post('/ngos', NgoCreateValidator, NgoController.store);

routes.get('/incidents', IncidentsListValidator, IncidentController.index);
routes.post('/incidents', IncidentsCreateValidator, IncidentController.store);
routes.delete('/incidents/:id', IncidentsDeleteValidator, IncidentController.destroy);

routes.get('/profiles', ProfilesListValidator, ProfileController.index);

routes.post('/sessions', SessionsCreateValidator, SessionController.store);

export default routes;
