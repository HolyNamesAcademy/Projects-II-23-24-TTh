import * as React from 'react';
import Button from '@mui/material/Button';

function morePizza() {}

export default function DisableElevation() {
  return (
    <Button variant="contained" disableElevation onClick={morePizza()}>
      Buy Pizza
    </Button>
  );
}
