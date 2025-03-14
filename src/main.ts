import express from 'express';
import userRoutes from './routes/user-routes';
import { configEnvironment } from './config/config';

const app =  express();
app.use(express.json());
app.use('/users', userRoutes);
app.listen(configEnvironment.port, () => console.log('Server running on port 3000'));
