import express from 'express';
import imageRoutes from './image.routes';

const router = express.Router();

router.use('/images', imageRoutes);

export default router;
