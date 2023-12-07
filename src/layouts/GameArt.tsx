import { useContext } from 'react';
import GamesContext from '../contexts/GamesContext';

export const GameArt = () => {
  const { currentGame } = useContext(GamesContext);

  return (
    <div className="GameArt">
      <div
        className="GameArt-art GameArt-artColored"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${currentGame?.background_image})`
        }}
      ></div>
    </div>
  );
};
