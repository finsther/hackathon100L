import express from 'express';

// Middlewares
import userAuthentication from '../../lib/middleware/userAuthentication.js';

// Controllers
import loginUser from '../../controllers/v1/user/login.js';
import registerUser from '../../controllers/v1/user/register.js';
import profile from '../../controllers/v1/user/profile.js';

const router = express.Router();

router.get(
  '/profile',
  userAuthentication,
  profile
);

router.post(
  '/register',
  registerUser
);

router.post(
  '/login',
  loginUser
);

export default router;
