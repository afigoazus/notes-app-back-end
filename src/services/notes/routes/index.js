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

const router = express.Router();

router.get('/notes', validateQuery(noteQuerySchema), getNotes);
router.post('/notes', validate(notePayloadSchema), createNote);
router.get('/notes/:id', getNoteById);
router.put('/notes/:id', validate(notePayloadSchema), editNoteById);
router.delete('/notes/:id', deleteNoteById);

export default router;
