import { Router } from 'express';

import AuthMiddleware from './app/middlewares/auth';
import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import PlanController from './app/controllers/PlanController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import GymHelpOrderController from './app/controllers/GymHelpOrderController';
import StudentHelpOrderController from './app/controllers/StudentHelpOrderController';

const routes = Router();

routes.post('/signin', SessionController.store);

routes.use(AuthMiddleware);

routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

routes.get('/plans', PlanController.index);
routes.post('/plans', PlanController.store);
routes.put('/plans/:id', PlanController.update);
routes.delete('/plans/:id', PlanController.destroy);

routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.put('/registrations/:id', RegistrationController.update);
routes.delete('/registrations/:id', RegistrationController.destroy);

routes.get('/students/:id/checkins', CheckinController.index);
routes.post('/students/:id/checkins', CheckinController.store);

routes.get('/help-orders/unanswered', GymHelpOrderController.index);
routes.get('/students/:id/help-orders', GymHelpOrderController.show);
routes.post('/help-orders/:id/answer', GymHelpOrderController.store);

routes.post('/students/:id/help-orders', StudentHelpOrderController.store);

export default routes;
