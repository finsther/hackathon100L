import express from 'express';

// Middlewares
import userAuthentication from '../../../../lib/middleware/userAuthentication';

// Controllers
import loginUser from './login';
import registerUser from './register';
import profile from './profile';

const router = express.Router();

router.get(
  '/profile',
  userAuthentication,
  profile,
);

router.post(
  '/register',
  registerUser,
);

router.post(
  '/login',
  loginUser,
);

export default router;
