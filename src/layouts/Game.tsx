import { useContext, useEffect, useState } from 'react';
import IGame from '../types/game';
import { API_BASE_URL, API_KEY } from '../shared/constants';
import { useParams } from 'react-router';
import GamesContext from '../contexts/GamesContext';
import {
  formattedDate,
  setGameDetailsUrl,
  setPlatformLogo
} from '../shared/utils';

export const Game = () => {
  const params = useParams();
  const { setCurrentGame, screenshots, setGameScreenshots } =
    useContext(GamesContext);
  const [game, setGame] = useState<IGame | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false);

  const displayDetailedSection = () => setIsVisible(!isVisible);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_BASE_URL}/games/${params.slug}?key=${API_KEY}`
        );
        const json = await response.json();

        setCurrentGame(json);
        setGame(json);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchGameScreenshots = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/games/${params.slug}/screenshots?key=${API_KEY}`
        );
        const json = await response.json();

        setGameScreenshots(json.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchGame();
    fetchGameScreenshots();
  }, [params.slug]);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (game === null) {
    return <div className="GamePage">Sorry not found.</div>;
  } else {
    return (
      <div className="GamePage">
        <div className="GamePage-content">
          <div className="GamePage-head">
            <div className="GamePage-releasedDate">
              {formattedDate(game.released)}
            </div>

            <div className="GamePage-platforms">
              {game.parent_platforms &&
                game.parent_platforms.map((pf, index) => (
                  <img
                    className="gameCard-platform"
                    key={index}
                    src={setPlatformLogo(pf.platform.slug) as string}
                  />
                ))}
            </div>

            <div className="GamePage-playtime">
              Average playtime: {game.playtime} hours
            </div>
          </div>
          <h1 className="GamePage-gameName">{game.name}</h1>

          <div className="GamePage-section GamePage-screenshots">
            <div className="GamePage-screenshotsInner">
              {screenshots &&
                screenshots.map((screenshot, index) => (
                  <div
                    className="GamePage-screenshotItem"
                    key={index}
                  >
                    <img
                      src={screenshot.image}
                      alt=""
                      className="GamePage-screenshotImage"
                    />
                  </div>
                ))}
            </div>
          </div>

          <section className="GamePage-section GamePage-about">
            <h2 className="GamePage-subtitle">About</h2>
            <p>{game.description_raw}</p>
          </section>

          <section className="GamePage-section GamePage-availabilities">
            <h2 className="GamePage-subtitle">Where to buy</h2>

            <div className="GamePage-stores">
              {game.stores &&
                game.stores.map((st) => (
                  <div
                    className="GamePage-storesItem"
                    key={st.id}
                  >
                    {st.store.name}
                  </div>
                ))}
            </div>
          </section>

          <section className="GamePage-section">
            <ul className="GamePage-metaList">
              <li className="GamePage-metaItem">
                <p className="GamePage-metaTitle">Developer(s)</p>
                {game.developers.map((dev) => (
                  <a
                    href={setGameDetailsUrl('developers', dev.slug)}
                    className="GamePage-sectionLink"
                    title={dev.name}
                    key={dev.id}
                  >
                    {dev.name}
                  </a>
                ))}
              </li>
              <li className="GamePage-metaItem">
                <p className="GamePage-metaTitle">Publisher(s)</p>
                {game.publishers.map((pub) => (
                  <a
                    href={setGameDetailsUrl('publishers', pub.slug)}
                    className="GamePage-sectionLink"
                    title={pub.name}
                    key={pub.id}
                  >
                    {pub.name}
                  </a>
                ))}
              </li>
              <li className="GamePage-metaItem">
                <p className="GamePage-metaTitle">Website</p>
                <a
                  href={game.website}
                  title={game.website}
                  className="GamePage-sectionLink"
                >
                  {game.website}
                </a>
              </li>
              <li className="GamePage-metaItem">
                <p className="GamePage-metaTitle">Age rating</p>
                <span>{game.esrb_rating.name}</span>
              </li>
              <li className="GamePage-metaItem">
                <p className="GamePage-metaTitle">Metascore</p>
                <div
                  className={`GamePage-metascoreLabel ${
                    game.metacritic < 33
                      ? 'GamePage-metascoreLabel__red'
                      : game.metacritic > 33 && game.metacritic < 66
                      ? 'GamePage-metascoreLabel__yellow'
                      : game.metacritic > 66
                      ? 'GamePage-metascoreLabel__green'
                      : ''
                  }`}
                >
                  {game.metacritic}
                </div>
              </li>
            </ul>
          </section>

          <section className="GamePage-section GamePage-characteristics">
            <h2
              className={`GamePage-characteristicsSubtitle ${
                isVisible ? 'GamePage-characteristicsSubtitle--active' : ''
              }`}
              onClick={displayDetailedSection}
            >
              <span>Caractéristiques détaillées</span>
              <span className="GamePage-angle"></span>
            </h2>

            <section className="GamePage-section GamePage-characteristicsDetailed">
              <section className="GamePage-section">
                <h2 className="GamePage-subtitle">Platforms</h2>

                <ul className="GamePage-sectionList">
                  {game.platforms &&
                    game.platforms.map((pf) => (
                      <li
                        className="GamePage-sectionLink"
                        key={pf.platform.slug}
                      >
                        <a
                          href={setGameDetailsUrl('games', pf.platform.slug)}
                          title={pf.platform.name}
                        >
                          {pf.platform.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </section>

              <section className="GamePage-section">
                <h2 className="GamePage-subtitle">Genres</h2>

                <ul className="GamePage-sectionList">
                  {game.genres &&
                    game.genres.map((genre) => (
                      <li
                        className="GamePage-sectionLink"
                        key={genre.slug}
                      >
                        <a
                          href={setGameDetailsUrl('games', genre.slug)}
                          title={genre.name}
                        >
                          {genre.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </section>

              <section className="GamePage-section">
                <h2 className="GamePage-subtitle">Tags</h2>

                <ul className="GamePage-sectionList">
                  {game.tags &&
                    game.tags.map((tag) => (
                      <li
                        className="GamePage-sectionLink"
                        key={tag.slug}
                      >
                        <a
                          href={setGameDetailsUrl('tags', tag.slug)}
                          title={tag.name}
                        >
                          {tag.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </section>
            </section>
          </section>
        </div>
      </div>
    );
  }
};
