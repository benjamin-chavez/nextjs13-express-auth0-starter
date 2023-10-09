// src/app.ts

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import flash from 'express-flash';
import listEndpoints from 'express-list-endpoints';
import helmet from 'helmet';
import morgan from 'morgan';
import { checkJwt } from './middleware/authMiddleware';
import {
  generalErrorHandler,
  notFoundHandler,
} from './middleware/errorMiddleware';
import routes from './routes/index';

const baseUrl = process.env.AUTH0_BASE_URL || 'http://localhost:3000';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: baseUrl }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(flash());

app.use((req, res, next) => {
  console.log(req.headers);
  next();
});

app.get('/api/routes', checkJwt, (req, res) => {
  res.status(200).send(listEndpoints(app));
});
app.use('/api', routes);

app.use(notFoundHandler);
app.use(generalErrorHandler);

export default app;
