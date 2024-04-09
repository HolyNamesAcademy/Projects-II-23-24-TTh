import * as React from 'react';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  const clickMe = () => {};
  return (
    <Button variant="contained" disableElevation onClick={clickMe}>
      Purchase
    </Button>
  );
}
