import express from 'express';

import apiRoutes from './routes/index.js';
import connectToDatabase from './database.js'; 

const app = express();
const PORT = process.env.PORT || 3000;

connectToDatabase();

app.use(express.json());
app.use('/api/v1', apiRoutes);

app.get('/health', (_req, res) => {
  res.send('The application is online and working correctly!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
