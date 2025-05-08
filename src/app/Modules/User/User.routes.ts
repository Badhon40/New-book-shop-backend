import { Router } from 'express';
import { UserValidation } from './User.validation';
import validateRequest from '../../middlewares/validateRequest';
import { UserControllers } from './User.controller';
import authGurd from '../../middlewares/authGurd';

const router = Router();

router.post(
  '/createUser',
  validateRequest(UserValidation.createUserValidationSchema),
  UserControllers.createNewUser,
);
router.get('/getAllUsers', UserControllers.RetriveUsers);
router.patch(
  '/deactivateUser/:id',
  authGurd('admin'),
  UserControllers.deactivateUser,
);
router.patch(
  '/activateUser/:id',
  authGurd('admin'),
  UserControllers.activateUser,
);

export const UserRoutes = router;
