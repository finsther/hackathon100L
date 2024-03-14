import express from 'express';

import getAllWebinars from '../../controllers/webinar/getWebinars.js';
import createWebinar from '../../controllers/webinar/crearWebinar.js';

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
