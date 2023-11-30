import { useState } from 'react';
import IGame from '../types/game';

type GameCardAboutProps = {
  game: IGame;
};

export const GameCardAbout = ({ game }: GameCardAboutProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ul className={`gameCardAbout ${isOpen ? 'gameCardAbout--active' : ''}`}>
      <div className="gameCardAbout-viewMore">
        <li className="gameCardAbout-item">
          <div className="gameCardAbout-term">Release date:</div>
          <div className="gameCardAbout-description">{game.released}</div>
        </li>

        <li className="gameCardAbout-item">
          <div className="gameCardAbout-term">Genres:</div>
          <div className="gameCardAbout-description">
            {game.genres &&
              game.genres.map((genre, index) => (
                <span key={index}>
                  <a
                    className="gameCardAbout-link"
                    href={`/games/${genre.slug}`}
                  >
                    {genre.name}
                  </a>

                  {index + 1 === game.genres.length ? '' : ', '}
                </span>
              ))}
          </div>
        </li>

        <li className="gameCardAbout-item">
          <div className="gameCardAbout-term">Chart:</div>
          <div className="gameCardAbout-description">
            <a
              className="gameCardAbout-link"
              href="/games/2024"
            >
              #1 Top 2024
            </a>
          </div>
        </li>
      </div>

      <li className="gameCardAbout-item gameCardAbout-item--center">
        <span
          className="gameCardAbout-more"
          role="button"
          onClick={() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
          {isOpen ? 'View less' : 'View more'}
        </span>
      </li>
    </ul>
  );
};
