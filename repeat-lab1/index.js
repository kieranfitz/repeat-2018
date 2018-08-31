import dotenv from 'dotenv';
import express from 'express';
import gamesRouter from './api/games';

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.static('public'));

app.use('/api/games', gamesRouter);
app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});