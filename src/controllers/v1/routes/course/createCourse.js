import Course from '../../../../models/Course';

const createCourse = async (req, res) => {
  const {
    category,
    description,
    downvote,
    duration,
    instructor,
    publishedDate,
    thumbnailUrl,
    title,
    upvote,
    url,
  } = req.body;

  const newCourse = new Course({
    category,
    description,
    downvote,
    duration,
    instructor,
    publishedDate,
    thumbnailUrl,
    title,
    upvote,
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
