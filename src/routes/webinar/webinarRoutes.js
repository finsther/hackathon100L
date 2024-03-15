import express from 'express';

import getAllWebinars from '../../controllers/v1/webinar/getWebinars.js';
import createWebinar from '../../controllers/v1/webinar/crearWebinar.js';

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
