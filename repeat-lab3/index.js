import dotenv from 'dotenv';
import express from 'express';
import gamesRouter from './api/games';
import bodyParser from 'body-parser';
import postsRouter from './api/zombies';
import mongoose from 'mongoose';
import {loadGames} from './gamesData';
import {loadPosts} from './postsData';

dotenv.config();

const app = express();

const port = process.env.PORT;

// Connect to database
mongoose.connect(process.env.mongoDB);
// Populate DB with sample data
if (process.env.seedDb) {
  loadGames();
   loadPosts();
}

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.use('/api/games', gamesRouter);
app.use('/api/zombies', postsRouter);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});