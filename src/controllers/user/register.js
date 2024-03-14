import CryptManager from '../../lib/crypt.js';
import mongoose from 'mongoose';

import User from '../../models/User.js';

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
      return res.status(400).json({ message: 'Another user with this email already exist' });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: 'Server error' });
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

    res.status(201).json(registeredUser);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: 'Server error' });
  }
};

export default registerUser;
