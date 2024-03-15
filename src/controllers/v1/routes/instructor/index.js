import express from 'express';

// Controllers
import getAllInstructors from './getInstructors';
import createInstructor from './createInstructor';

const router = express.Router();

router.get(
  '/',
  getAllInstructors,
);

router.post(
  '/',
  createInstructor,
);

export default router;
