import express from 'express';

import getAllTeachers from '../../controllers/teacher/getTeachers.js';
import createTeacher from '../../controllers/teacher/createTeacher.js';

const router = express.Router();

router.get(
  '/',
  getAllTeachers
);

router.post(
  '/',
  createTeacher
);

export default router;
