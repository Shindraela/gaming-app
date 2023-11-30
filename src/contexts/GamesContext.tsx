import { createContext, useState, useEffect } from 'react';
import { API_BASE_URL, API_KEY } from '../shared/constants';
import ChildrenProps from '../types/children';
import IGame, { GamesContextType } from '../types/game';
import response from '../shared/response.json';

const GamesContext = createContext<GamesContextType>({} as GamesContextType);

export const GamesProvider = ({ children }: ChildrenProps) => {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    // @TODO: use real data when it will be OK
    // const fetchGames = async () => {
    //   try {
    //     const response = await fetch(
    //       `${API_BASE_URL}/games?key=${API_KEY}&page=1`
    //     );
    //     const list = await response.json();
    //     console.log('list :', list);

    //     setGames([...list.results]);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // fetchGames();
    setGames([...response.results]);
  }, []);

  return (
    <GamesContext.Provider value={{ games, setGames }}>
      {children}
    </GamesContext.Provider>
  );
};

export default GamesContext;
