import _ from 'lodash';
import mongoose from 'mongoose';

const getAllTeachers = async (_req, res) => {
  const Teacher = mongoose.model('Teacher');

  try {
    const teachers = await Teacher.find();

    if (_.isEmpty(teachers)) {
      return res.status(200).json([]);
    }

    return res.json(teachers);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Server error' });
  }
};

export default getAllTeachers;
