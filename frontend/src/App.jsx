import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import NoMatchPage from './pages/NoMatchPage';

function App() {
  return (
    <Provider store={store}>
      {/* Routes nest inside one another. Nested route paths build upon
      parent route paths, and nested route elements render inside
      parent route elements. See the note about <Outlet> in DefaultLayout. */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/other" element={<OtherPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
