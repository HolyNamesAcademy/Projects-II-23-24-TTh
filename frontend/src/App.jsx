import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import DefaultLayout from './layouts/DefaultLayout';
import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import WelcomePage from './pages/WelcomePage';
import NoMatchPage from './pages/NoMatchPage';
import ChatPage from './pages/ChatPage';
import GroceryStore from './pages/GroceryStore';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFA6C9',
    },
    secondary: purple,
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* Routes nest inside one another. Nested route paths build upon
      parent route paths, and nested route elements render inside
      parent route elements. See the note about <Outlet> in DefaultLayout. */}
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/other" element={<OtherPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/store" element={<GroceryStore />} />

            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}//
            <Route path="*" element={<NoMatchPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
