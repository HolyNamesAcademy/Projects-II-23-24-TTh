// This is an example page component. Copy it to make
// new pages. When you copy it, make sure to add a
// route to the App.jsx file.n
// import OtherPage from './pages/OtherPage';<Route path="/other" element={<OtherPage />} />
// I DONT THINK I NEED THIS BC IT WAS JUST THE COPY?
// import HomePage from './pages/HomePage'; <Route index element={<HomePage />} />
// NOT NEEDED BC SHOULD BE AFTER LOGIN CONFIRMED?

// is there a way to route to the backend userLogin/ is that needed?

// US MUI FOR HELP
// import { useState } from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function userLogin() {
  return (
    <div>
      <h1> Welcome to HNAMAGOTCHI! </h1>
      <h2>Please login! </h2>
      <TextField id="username" label="Username" variant="outlined" />
      <TextField id="password" label="Password" variant="outlined" />

      <h2> First time here? Sign Up!</h2>
      <Button variant="outlined">
        <Link to="/sign-up">
          Sign-Up Page
        </Link>
      </Button>

    </div>

  );
}
// login  works on the backend then it should route to home page
// how to connect backend to frontend?

export default userLogin;
