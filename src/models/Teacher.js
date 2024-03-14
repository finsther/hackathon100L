import mongoose from 'mongoose';

const teacherSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  profilePictureUrl: {
    type: String
  },
  birthdate: {
    type: Date,
    required: true
  },
});

const Teacher = mongoose.model('Teacher', teacherSchema);

export default Teacher;
