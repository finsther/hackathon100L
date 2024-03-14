import _ from 'lodash';
import mongoose from 'mongoose';

const getAllCourses = async (_req, res) => {
  const Course = mongoose.model('Course');

  try {
    const courses = await Course.find();

    if (_.isEmpty(courses)) {
      return res.status(200).json([]);
    }

    return res.json(courses);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Server error' });
  }
};

export default getAllCourses;
