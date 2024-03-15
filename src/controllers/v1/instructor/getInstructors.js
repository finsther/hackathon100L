import _ from 'lodash';
import mongoose from 'mongoose';

const getAllInstructors = async (_req, res) => {
  const Instructor = mongoose.model('Instructor');

  try {
    const instructors = await Instructor.find();

    if (_.isEmpty(instructors)) {
      return res.status(200).send([]);
    }

    return res.send(instructors);
  } catch (error) {
    console.log(error);

    return res.status(500).send({ code: 'UNEXPECTED_ERROR' });
  }
};

export default getAllInstructors;
