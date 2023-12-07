import { Outlet } from 'react-router';
import { useContext } from 'react';
import GamesContext, { GamesProvider } from '../contexts/GamesContext';
import { Navbar } from '../components/Navbar';
import { GameArt } from './GameArt';

export const Main = () => {
  const { currentGame } = useContext(GamesContext);

  return (
    <GamesProvider>
      <Navbar />
      <Outlet />
      {currentGame !== null && <GameArt />}
    </GamesProvider>
  );
};
