import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import NoMatchPage from './pages/NoMatchPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
      parent route paths, and nested route elements render inside
      parent route elements. See the note about <Outlet> in DefaultLayout. */}
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/other" element={<OtherPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatchPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
