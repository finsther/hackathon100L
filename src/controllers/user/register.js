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

  const newUser = new User({
    birthdate,
    email,
    gender,
    lastName,
    name,
    password,
    phoneNumber
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
