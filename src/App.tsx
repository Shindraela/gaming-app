import { Route, Routes } from 'react-router';
import { Game } from './layouts/Game';
import { GamesList } from './layouts/GamesList';
import { Main } from './layouts/Main';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Main />}
      >
        <Route
          index
          element={<GamesList />}
        />
        <Route
          path="/games/:id"
          element={<Game />}
        />
      </Route>
    </Routes>
  );
}

export default App;
