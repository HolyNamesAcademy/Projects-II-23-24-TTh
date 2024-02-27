import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import './ProfilePicture.css';

export default function LetterAvatars() {
  return (
    <Stack className="icon" direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: pink[500] }}>C</Avatar>
    </Stack>
  );
}
