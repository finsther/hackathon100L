import _ from 'lodash';
import mongoose from 'mongoose';

const getAllWebinars = async (_req, res) => {
  const Webinar = mongoose.model('Webinars');

  try {
    const webinars = await Webinar.find();

    if (_.isEmpty(webinars)) {
      return res.status(200).send([]);
    }

    return res.send(webinars);
  } catch (error) {
    return res.status(500).send({ code: 'UNEXPECTED_ERROR' });
  }
};

export default getAllWebinars;
