import * as React from 'react';
import FeedButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './FeedButton.css';

function feedCharby() {}

export default function OutlinedButtons() {
  return (
    <Stack class="feedButton" direction="row">
      <FeedButton variant="outlined" onClick={feedCharby}>
          Feed Charby
      </FeedButton>
      {/* I don't know how to fix the indentation on this */}
    </Stack>
  );
}
