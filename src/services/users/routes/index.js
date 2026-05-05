import { Router } from 'express';
import {
  createUser,
  getUserById,
  getUserByUsername,
} from '../controller/user-controller.js';
import validate from '../../../middlewares/validate.js';
import { userPayloadSchema } from '../../../services/users/validator/schema.js';

const router = Router();

router.post('/users', validate(userPayloadSchema), createUser);
router.get('/user/:id', getUserById);
router.get('/users', getUserByUsername);

export default router;
