
import express from 'express';

import courseRoutes from './course/courseRoutes.js';
import userRoutes from './user/userRoutes.js';
import webinarRoutes from './webinar/webinarRoutes.js';

const router = express.Router();

router.use('/courses', courseRoutes);
router.use('/users', userRoutes);
router.use('/webinars', webinarRoutes);

export default router;