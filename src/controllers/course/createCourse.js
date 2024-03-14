import Course from '../../models/Course.js';

const createCourse = async (req, res) => {
  const {
    author,
    category,
    description,
    downvote,
    duration,
    publishedDate,
    thumbnailUrl,
    title,
    upvote,
    url
  } = req.body;

  const newCourse = new Course({
    author,
    category,
    description,
    downvote,
    duration,
    publishedDate,
    thumbnailUrl,
    title,
    upvote,
    url
  });

  try {
    const savedCourse = await newCourse.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: 'Server error' });
  }
};

export default createCourse;
