import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import serverConfig from './configs/server.config';
import dbConfig from './configs/db.config';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// Routes
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello World!');
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Connect to database
dbConfig
  .then(() => console.log('Connected to database'))
  .catch((err) => console.error('Error connecting to database:', err));

// Start server
app.listen(serverConfig.port, () => {
  console.log(`Server running in ${serverConfig.env} mode on port ${serverConfig.port}`);
});
