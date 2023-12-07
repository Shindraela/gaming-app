import { ChangeEvent, useContext, useState } from 'react';
import GamesContext from '../contexts/GamesContext';
import IGame from '../types/game';

export const Searchbar = () => {
  const { games } = useContext(GamesContext);
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<IGame[]>([]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    const results = games.filter((g) =>
      g.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setResults(results);
  };

  const resetSearch = () => {
    setQuery('');
    setResults([]);
  };

  return (
    <div className="Searchbar">
      <input
        type="text"
        placeholder="Search games"
        className="Searchbar-input"
        value={query}
        onChange={(e) => onSearch(e)}
      />

      {query.length > 0 ? (
        <div className="Searchbar-results">
          {results.map((game) => (
            <a
              key={game.slug}
              href={`/games/${game.slug}`}
              onClick={resetSearch}
              className="Searchbar-gameLink"
              tabIndex={0}
            >
              {game.name}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
};
