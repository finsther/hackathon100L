import Teacher from '../../models/Teacher.js';

const createTeacher = async (req, res) => {
  const {
    birthdate,
    lastName,
    name,
    occupation,
    profilePictureUrl
  } = req.body;

  const newTeacher = new Teacher({
    birthdate,
    lastName,
    name,
    occupation,
    profilePictureUrl
  });

  try {
    const savedTeacher = await newTeacher.save();

    res.status(201).json(savedTeacher);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: 'Server error' });
  }
};

export default createTeacher;
