import { Router } from 'express';
import { uploadImages } from '../controller/upload-controller.js';
import { upload } from '../storage/storage-config.js';
import authenticationToken from '../../../middlewares/auth.js';

const router = Router();

router.post(
  '/upload/images',
  authenticationToken,
  upload.single('image'),
  uploadImages,
);

export default router;
