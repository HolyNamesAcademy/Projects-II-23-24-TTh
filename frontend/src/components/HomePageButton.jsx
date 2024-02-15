import * as React from 'react';
import HomePageButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './HomePageButton.css';

function sendHeart() {}

export default function OutlinedButtons() {
  return (
    <Stack class="nav-buttons" direction="row" spacing={2}>
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
      <HomePageButton variant="outlined" onClick={sendHeart}>
        💗
      </HomePageButton>
    </Stack>
  );
}
