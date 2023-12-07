export default interface IGame {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: [
    {
      metascore: number;
      url: string;
    }
  ];
  released: string;
  tba: true;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: [
    {
      id: number;
      title: string;
      count: number;
      percent: number;
    }
  ];
  reactions: {};
  added: number;
  added_by_status: {};
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: string;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: string;
  youtube_count: string;
  reviews_text_count: string;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  esrb_rating: {
    id: number;
    slug: string;
    name: string;
  };
  description_raw: string;
  platforms: [
    {
      platform: {
        id: number;
        slug: string;
        name: string;
      };
      released_at: string;
      requirements: {
        minimum: string;
        recommended: string;
      };
    }
  ];
  parent_platforms: [
    {
      platform: {
        id: number;
        name: string;
        slug: string;
      };
    }
  ];
  stores: [
    {
      id: number;
      url: string;
      store: {
        id: number;
        name: string;
        slug: string;
        domain: string;
        games_count: number;
        image_background: string;
      };
    }
  ];
  developers: [
    {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];
  publishers: [
    {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];
  genres: [
    {
      id: number;
      name: string;
      slug: string;
      games_count: number;
      image_background: string;
    }
  ];
  tags: [
    {
      id: number;
      name: string;
      slug: string;
      language: string;
      games_count: number;
      image_background: string;
    }
  ];
}

export type IScreenshot = {
  height: number;
  id: number;
  image: string;
  is_deleted: boolean;
  width: number;
};

export type GamesContextType = {
  games: IGame[];
  setGames: (games: IGame[]) => void;
  currentGame: IGame | null;
  setCurrentGame: (game: IGame) => void;
  screenshots: IScreenshot[];
  setGameScreenshots: (screenshots: IScreenshot[]) => void;
};
