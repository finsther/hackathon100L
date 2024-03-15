import Course from '../../../../models/Course';

const createCourse = async (req, res) => {
  const {
    broadcastDate,
    description,
    instructor,
    thumbnailUrl,
    title,
    url,
  } = req.body;

  const newCourse = new Course({
    broadcastDate,
    description,
    instructor,
    thumbnailUrl,
    title,
    url,
  });

  try {
    const savedCourse = await newCourse.save();

    res.status(201).send(savedCourse);
  } catch (error) {
    res.status(500).send({ code: 'UNEXPECTED_ERROR' });
  }
};

export default createCourse;
