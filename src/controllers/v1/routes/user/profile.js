import mongoose from 'mongoose';

const userProfile = async (req, res) => {
  const {_id: userId} = req.user._id;

  const User = mongoose.model('User');

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ code: 'USER_NOT_FOUND' });
    }

    return res.send(
      {
        name: user.name,
        lastName: user.lastName,
        gender: user.gender,
        email: user.email,
        phoneNumber: user.phoneNumber,
        birthdate: user.birthdate
      }
    );
  } catch (error) {
    console.log(error);

    return res.status(500).send({ code: 'UNEXPECTED_ERROR' });
  }
};

export default userProfile;
