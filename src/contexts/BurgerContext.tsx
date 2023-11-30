import { createContext, useState, useEffect } from 'react';
import ChildrenProps from '../types/children';
import { BurgerContextType } from '../types/burger';
import response from '../shared/response.json';

const GamesContext = createContext<BurgerContextType>({} as BurgerContextType);

export const GamesProvider = ({ children }: ChildrenProps) => {
  const [burgerIsOpen, setBurgerIsOpen] = useState<boolean>(false);

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
