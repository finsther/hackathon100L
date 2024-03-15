import express from 'express';

// Controllers
import getAllWebinars from './getWebinars.js';
import createWebinar from './crearWebinar.js';

const router = express.Router();

router.get(
  '/',
  getAllWebinars
);

router.post(
  '/',
  createWebinar
);

export default router;
