import express from 'express';

import apiRoutes from './controllers/v1';
import connectToDatabase from './database';

const app = express();
const PORT = process.env.PORT || 3000;

connectToDatabase();

app.use(express.json());
app.use('/api/v1', apiRoutes);

app.get('/health', (_req, res) => {
  res.send('The application is online and working correctly!');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`);
});
