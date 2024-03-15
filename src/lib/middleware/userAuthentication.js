import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

import User from '../../models/User';

// eslint-disable-next-line consistent-return
const userAuthenticationMiddleware = async (req, res, next) => {
  dotenv.config();

  const { authorization } = req.headers || {};

  if (!authorization) {
    return res.status(401).send({ code: 'MISSING_TOKEN' });
  }

  const [tokenType, token] = authorization.split(' ');

  if (tokenType !== 'Bearer') {
    return res.status(401).send({ code: 'WRONG_TOKEN_TYPE' });
  }

  let decodedToken;

  try {
    decodedToken = jwt.verify(token, process.env.SECRET_TOKEN);
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).send({ code: 'EXPIRED_TOKEN' });
    }

    return res.status(401).send({ code: 'INVALID_TOKEN' });
  }

  const user = await User.findById(decodedToken.userId);

  if (!user) {
    return res.status(401).send({ code: 'INVALID_TOKEN' });
  }

  req.user = user;

  next();
};

export default userAuthenticationMiddleware;
