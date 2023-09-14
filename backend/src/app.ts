import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';

import cors from 'cors';
import router from './routes';
import HttpError from './errors/HttpError';

const app = express();

app.use(cors());

app.use(router);

app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({ message: err.message });
  }
  console.error(err);
  return res.status(500).json({ message: 'Desculpe. Um erro interno ocorreu' });
});

export default app;
