import {
  addCollaboration,
  deleteCollaboration,
} from '../controller/collaboration-controller.js';
import validate from '../../../middlewares/validate.js';
import authenticateToken from '../../../middlewares/auth.js';
import {
  collaborationPayloadSchema,
  collaborationDeletePayloadSchema,
} from '../validator/schema.js';
import { Router } from 'express';

const router = Router();

router.post(
  '/collaborations',
  authenticateToken,
  validate(collaborationPayloadSchema),
  addCollaboration,
);
router.delete(
  '/collaborations',
  authenticateToken,
  validate(collaborationDeletePayloadSchema),
  deleteCollaboration,
);

export default router;
