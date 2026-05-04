import express from 'express';
import {
  createNote,
  getNotes,
  getNoteById,
  editNoteById,
  deleteNoteById,
} from '../controller/note-controller.js';
import validate from '../../../middlewares/validate.js';
import { notePayloadSchema, noteQuerySchema } from '../validator/schema.js';
import validateQuery from '../../../middlewares/validateQuery.js';
import authenticationToken from '../../../middlewares/auth.js';

const router = express.Router();

router.get(
  '/notes',
  authenticationToken,
  validateQuery(noteQuerySchema),
  getNotes,
);
router.post(
  '/notes',
  authenticationToken,
  validate(notePayloadSchema),
  createNote,
);
router.get('/notes/:id', authenticationToken, getNoteById);
router.put(
  '/notes/:id',
  authenticationToken,
  validate(notePayloadSchema),
  editNoteById,
);
router.delete('/notes/:id', authenticationToken, deleteNoteById);

export default router;
