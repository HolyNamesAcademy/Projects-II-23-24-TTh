import * as React from 'react';
import FeedButton from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './FeedButton.css';
import FoodAlert from './FoodAlert';

export default function OutlinedButtons() {
  return (
    <Stack class="feed-Button" direction="row">
      <FeedButton variant="outlined" onClick={FoodAlert}>
        Feed Charby
      </FeedButton>
    </Stack>
  );
}
