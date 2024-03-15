import express from 'express';

import getAllInstructors from '../../controllers/v1/instructor/getInstructors.js';
import createInstructor from '../../controllers/v1/instructor/createInstructor.js';

const router = express.Router();

router.get(
  '/',
  getAllInstructors
);

router.post(
  '/',
  createInstructor
);

export default router;
