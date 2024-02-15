import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
// This is the default layout component. You should add components here
// which should be shown on all pages by default. You can copy this file
// to create alternative layouts for maybe a page without navigation.
function DefaultLayout() {
  return (
    <Container maxWidth="xs">
      <NavBar />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined in the App.jsx above. */}
      <Outlet />
    </Container>
  );
}

export default DefaultLayout;
