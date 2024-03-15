import mongoose from 'mongoose';

import CryptManager from '../../../../lib/crypt.js';
import User from '../../../../models/User.js';

const registerUser = async (req, res) => {
  const {
    birthdate,
    email,
    gender,
    lastName,
    name,
    password,
    phoneNumber
  } = req.body;

  const crypt = new CryptManager();
  const hashedPassword = await crypt.hashPassword(password);
  // check if email user is already registered in database
  const userModel = mongoose.model('User');

  try {
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(400).send({ code: 'EMAIL_ALREADY_REGISTERED' });
    }
  } catch (error) {
    console.error(error);

    res.status(500).send({ code: 'UNEXPECTED_ERROR' });
  }

  const newUser = new User({
    birthdate,
    email,
    gender,
    lastName,
    name,
    phoneNumber,
    password: hashedPassword
  });

  try {
    const registeredUser = await newUser.save();

    res.status(201).send(registeredUser);
  } catch (error) {
    console.error(error);

    res.status(500).send({ code: 'UNEXPECTED_ERROR' });
  }
};

export default registerUser;
