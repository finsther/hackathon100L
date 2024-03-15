import _ from 'lodash';
import mongoose from 'mongoose';

const getAllCourses = async (_req, res) => {
  const Course = mongoose.model('Course');

  try {
    const courses = await Course.find();

    if (_.isEmpty(courses)) {
      return res.status(200).send([]);
    }

    return res.send(courses);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ code: 'UNEXPECTED_ERROR' });
  }
};

export default getAllCourses;
