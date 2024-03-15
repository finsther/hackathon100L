
import express from 'express';

import courseRoutes from './routes/course';
import instructorsRoutes from './routes/instructor';
import userRoutes from './routes/user';
import webinarRoutes from './routes/webinar';

const router = express.Router();

router.use('/courses', courseRoutes);
router.use('/instructors', instructorsRoutes);
router.use('/users', userRoutes);
router.use('/webinars', webinarRoutes);

export default router;
