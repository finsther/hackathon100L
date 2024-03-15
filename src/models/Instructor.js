import mongoose from 'mongoose';

const instructorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  profilePictureUrl: {
    type: String,
  },
  birthdate: {
    type: Date,
    required: true,
  },
});

const Instructor = mongoose.model('Instructor', instructorSchema);

export default Instructor;
