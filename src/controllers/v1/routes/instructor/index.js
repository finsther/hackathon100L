import express from 'express';

// Controllers
import getAllInstructors from './getInstructors.js';
import createInstructor from './createInstructor.js';

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
