// This is an example page component. Copy it to make
// new pages. When you copy it, make sure to add a
// route to the App.jsx file.
import * as React from 'react';
import { Button } from '@mui/material';
import './WelcomePage.css';

function WelcomePage() {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/static/charby3.png`} alt="charby character" />

      <h1>Welcome to HNAmagotchi!</h1>
      <h3>
        In our website, users can adopt a charby, similar to a tamagotchi,
        and are responsible for taking care of it. This is only available
        to students at Holy Names Academy.
      </h3>
      <Button href="/sign-up" variant="contained" color="primary" className="signup">
        Sign Up!
      </Button>

      <Button href="/login" variant="outlined" color="primary">
        Log In!
      </Button>
    </>
  );
}

export default WelcomePage;
