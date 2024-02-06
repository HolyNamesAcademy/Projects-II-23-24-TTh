import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './Button.css';

export default function OutlinedButtons() {
  return (
    <Stack class="nav-buttons" direction="row" spacing={2}>
      <Button variant="outlined">
        🛒
      </Button>
      <a href="ChatPage">
        <Button variant="outlined">
          💬
        </Button>
      </a>
      <Button variant="outlined">
        💗
      </Button>
    </Stack>
  );
}
