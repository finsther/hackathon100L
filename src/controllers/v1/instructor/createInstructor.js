import Instructor from '../../../models/Instructor.js';

const createInstructor = async (req, res) => {
  const {
    birthdate,
    lastName,
    name,
    occupation,
    profilePictureUrl
  } = req.body;

  const newInstructor = new Instructor({
    birthdate,
    lastName,
    name,
    occupation,
    profilePictureUrl
  });

  try {
    const savedInstructor = await newInstructor.save();

    res.status(201).send(savedInstructor);
  } catch (error) {
    console.error(error);

    res.status(500).send({ code: 'UNEXPECTED_ERROR' });
  }
};

export default createInstructor;
