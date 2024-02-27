import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './FeedButton.css';

export default function FeedButton({ feed }) {
  return (
    <Stack className="feed-button" direction="row">
      <Button variant="outlined" onClick={feed}>
        Feed Charby
      </Button>
    </Stack>
  );
}
