import gameModel from './api/games/gameModel';

const games = [
  {
    'title': 'GTA V',
    'publisher': 'Rockstar',
    'age_rating': '18',
    'product_code': '123',
  },
  {
    'title': 'FIFA 18',
    'publisher': 'EA',
    'age_rating': '3',
    'product_code': '456',
  },
  {
    'title': 'Skyrim',
    'publisher': 'Bethesda',
    'age_rating': '15',
    'product_code': '789',
  },
  {
    'title': 'Far Cry 5',
    'publisher': 'Ubisoft',
    'age_rating': '18',
    'product_code': '963',
  },
];

export const loadGames = () => {
  gameModel.find({}).remove(() => {
    gameModel.collection.insert(games, (err, docs)=>{
    if (err) {
      console.log(`failed to Load Game Data: ${err}`);
    } else {
      console.info(`${games.length} games were successfully stored.`);
    }
  });
});
};