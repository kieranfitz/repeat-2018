import express from 'express';
import {games} from './games';

const router = express.Router(); // eslint-disable-line
router.get('/', (req, res) => {
  res.send({games: games});
});

export default router;