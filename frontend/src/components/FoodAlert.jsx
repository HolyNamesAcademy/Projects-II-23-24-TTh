import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

export default function SimpleAlert({ show }) {
  if (!show) {
    return null;
  }

  return (
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Your Charby is full
    </Alert>
  );
}
