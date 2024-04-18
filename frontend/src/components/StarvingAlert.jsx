import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function SimpleAlert({ level }) {
  if (level > 0) {
    return null;
  }

  let message = '';

  if (level === 0) {
    message = 'Your Charby is Starving';
  }
  if (level === -1) {
    message = 'Your Charby is being siezed by Charby Protective Services';
  }

  return (
    <Alert severity="error">
      {message}
    </Alert>
  );
}
