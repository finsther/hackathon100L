import mongoose from 'mongoose';

const mongoURI = 'mongodb://localhost:27017/academy';

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Successful connection to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);

    throw error;
  }
};

export default connectToDatabase;
