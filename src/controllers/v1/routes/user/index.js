import express from 'express';

// Middlewares
import userAuthentication from '../../../../lib/middleware/userAuthentication.js';

// Controllers
import loginUser from './login.js';
import registerUser from './register.js';
import profile from './profile.js';

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
