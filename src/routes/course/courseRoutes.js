import express from 'express';

import getAllCourses from '../../controllers/course/getCourses.js';
import createCourse from '../../controllers/course/createCourse.js';

const router = express.Router();

router.get(
  '/',
  getAllCourses
);

router.post(
  '/',
  createCourse
);

export default router;
