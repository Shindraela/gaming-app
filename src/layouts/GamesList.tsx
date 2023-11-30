import { useContext } from 'react';
import GamesContext from '../contexts/GamesContext';
import { GameCard } from '../components/GameCard';

export const GamesList = () => {
  const { games } = useContext(GamesContext);
  // console.log('games :', games);

  return (
    <div className="gamesList">
      {games &&
        games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
    </div>
  );
};
