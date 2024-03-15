import express from 'express';

import getAllCourses from '../../controllers/v1/course/getCourses';
import createCourse from '../../controllers/v1/course/createCourse.js';

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
