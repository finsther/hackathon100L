import mongoose from 'mongoose';

const webinarSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Instructor',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  upvote: {
    type: Number,
  },
  downvote: {
    type: Number,
  },
  broadcastDate: {
    type: Date,
    required: true
  },
  publishedDate: {
    type: Date
  },
});

const Webinar = mongoose.model('Webinar', webinarSchema);

export default Webinar;
