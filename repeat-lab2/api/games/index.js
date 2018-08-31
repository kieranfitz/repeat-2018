import express from 'express';
import {games} from './games';

const router = express.Router(); // eslint-disable-line

router.get('/', (req, res) => {
  res.send({games: games});
});

router.post('/', (req, res) => {
        let newGame = req.body;
        if (newGame){
          games.push({title: newGame.title, publisher : newGame.publisher, age_rating: newGame.age_rating, product_code: newGame.product_code }) ;
          res.status(201).send({message: "Game Created"});
      }else{
            res.status(400).send({message: "Unable to find Game in request. No Game Found in body"});
      }
});

// Update a game
router.put('/:id', (req, res) => {
     const key = req.params.id;
     const updateGame = req.body;
     const index = games.map((game)=>{
return game.product_code;
}).indexOf(key);
            if (index !== -1) {
               games.splice(index, 1, {title: updateGame.title, publisher: updateGame.publisher, age_rating: updateGame.age_rating,
               product_code: updateGame.product_code});
               res.status(200).send({message: 'Game Updated'});
              } else {
          res.status(400).send({message: 'Unable to find Game in request. No Game Found in body'});
      }
});

// Delete a game
router.delete('/:id', (req, res) => {
     const key = req.params.id;
     const index = games.map((game)=>{
return game.product_code;
}).indexOf(key);
    if (index > -1) {
games.splice(index, 1);
        res.status(200).send({message: `Deleted game with product_code: ${key} `});
    } else {
      res.status(400).send({message: `Unable to find game with product_code: ${key}. No game Deleted`});
      }
});


export default router;