import express from 'express';

// Controllers
import getAllCourses from './getCourses';
import createCourse from './createCourse';

const router = express.Router();

router.get(
  '/',
  getAllCourses,
);

router.post(
  '/',
  createCourse,
);

export default router;
