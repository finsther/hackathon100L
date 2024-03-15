import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import CryptManager from '../../../../lib/crypt.js';
import User from '../../../../models/User.js';

const loginUser = async (req, res) => {
  dotenv.config();

  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).send({ code: "EMAIL_NOT_REGISTERED" });
    }

    const crypt = new CryptManager();
    const passwordMatch = await crypt.comparePasswords(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send({ code: "INVALID_CREDENTIALS" });
    }

    const jwtoken = jwt.sign(
      { userId: user._id },
      process.env.SECRET_TOKEN, {
        expiresIn: "1h"
      }
    );

    res.status(200).send({ jwtoken });
  } catch (error) {
    console.error(error);

    res.status(500).send({ error: "UNEXPECTED_ERROR" });
  }
};

export default loginUser;
