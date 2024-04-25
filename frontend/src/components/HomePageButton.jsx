import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import HomePageButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './HomePageButton.css';
import { useDispatch } from 'react-redux';
import { playAnimation } from '../store/charby';

export default function OutlinedButtons() {
  const dispatch = useDispatch();
  function giveDrink() {
    dispatch(playAnimation('drink'));
  }
  return (
    <Stack className="nav-buttons" direction="row" spacing={2}>
      <RouterLink to="store">
        <HomePageButton variant="outlined">
          🛒
        </HomePageButton>
      </RouterLink>
      <RouterLink to="chat">
        <HomePageButton variant="outlined">
          💬
        </HomePageButton>
      </RouterLink>
      <div>
        <HomePageButton variant="outlined" onClick={giveDrink}>
          🧃
        </HomePageButton>
      </div>
    </Stack>
  );
}
