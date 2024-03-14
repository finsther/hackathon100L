import _ from 'lodash';
import mongoose from 'mongoose';

const getAllWebinars = async (_req, res) => {
  const Webinar = mongoose.model('Webinars');

  try {
    const webinars = await Webinar.find();

    if (_.isEmpty(webinars)) {
      return res.status(200).json([]);
    }

    return res.json(webinars);
  } catch (error) {
    console.log(error);

    return res.status(500).json({ message: 'Server error' });
  }
};

export default getAllWebinars;
