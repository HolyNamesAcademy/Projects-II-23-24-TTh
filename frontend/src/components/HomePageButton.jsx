import * as React from 'react';
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
      <a href="store">
        <HomePageButton variant="outlined">
          🛒
        </HomePageButton>
      </a>
      <a href="chat">
        <HomePageButton variant="outlined">
          💬
        </HomePageButton>
      </a>
      <div>
        <HomePageButton variant="outlined" onClick={giveDrink}>
          🧃
        </HomePageButton>
      </div>
    </Stack>
  );
}
