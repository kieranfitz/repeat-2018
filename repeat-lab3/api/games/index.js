import express from 'express';
import Game from './gameModel';
import _ from 'lodash';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  Game.find((err, games) => {
    if (err) return handleError(res, err);
    return res.json(200, games);
  });
});

router.post('/', (req, res) => {
  Game.create(req.body, function(err, game) {
    if (err) return handleError(res, err);
    return res.json(201, game);
  });
});

// Update a game
router.put('/:id', (req, res) => {
  if (req.body._id) delete req.body._id;
  Game.findById(req.params.id, (err, game) => {
    if (err) return handleError(res, err);
    if (!game) return res.send(404);
    const updated = _.merge(game, req.body);
    updated.save((err) => {
      if (err) return handleError(res, err);
      return res.json(200, game);
    });
  });
});

// Delete a game
router.delete('/:id', (req, res) => {
  Game.findById(req.params.id, (err, game) => {
    if (err) return handleError(res, err);
    if (!game) return res.send(404);
    game.remove(function(err) {
      if (err) return handleError(res, err);
      return res.send(204);
    });
  });
});

/**
 * Handle general errors.
 * @param {object} res The response object
 * @param {object} err The error object.
 * @return {object} The response object
 */
function handleError(res, err) {
  return res.send(500, err);
};

export default router;