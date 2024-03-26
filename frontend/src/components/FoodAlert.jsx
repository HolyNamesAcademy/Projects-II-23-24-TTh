import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert({ show, level }) {
  if (!show) {
    return null;
  }

  let message = 'Your Charby is full';
  if (level < 3) {
    message = 'You fed your charby';
  }

  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      {message}
    </Alert>
  );
}
