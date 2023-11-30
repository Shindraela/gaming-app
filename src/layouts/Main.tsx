import { Outlet } from 'react-router';
import { GamesProvider } from '../contexts/GamesContext';
import { Navbar } from '../components/Navbar';

export const Main = () => {
  return (
    <GamesProvider>
      <Navbar />
      <Outlet />
    </GamesProvider>
  );
};
