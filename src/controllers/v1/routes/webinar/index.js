import express from 'express';

// Controllers
import getAllWebinars from './getWebinars';
import createWebinar from './crearWebinar';

const router = express.Router();

router.get(
  '/',
  getAllWebinars,
);

router.post(
  '/',
  createWebinar,
);

export default router;
