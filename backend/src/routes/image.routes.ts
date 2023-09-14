import express from 'express';
import multer from 'multer';
import * as imageController from '../controllers/image.controller';

const imageRoutes = express.Router();
const storage = multer.memoryStorage();
const uploader = multer({ storage });

imageRoutes.post('/', uploader.single('file'), imageController.postImage);
imageRoutes.get('/', imageController.getAllImages);
imageRoutes.get('/:id', imageController.getImageById);

export default imageRoutes;
