
import express from 'express';

import courseRoutes from './course/courseRoutes.js';
import instructorsRoutes from './instructor/instructorRoutes.js';
import userRoutes from './user/userRoutes.js';
import webinarRoutes from './webinar/webinarRoutes.js';

const router = express.Router();

router.use('/courses', courseRoutes);
router.use('/instructors', instructorsRoutes);
router.use('/users', userRoutes);
router.use('/webinars', webinarRoutes);

export default router;
