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
import { useDispatch } from 'react-redux';

import { useState } from 'react';

import {
  login,
} from '../store/user';

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // This function will let us dispatch changes to the store.
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    // prevent page from reloading when submitting form.
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log({ username, password });

    dispatch(login(username, password));
  };

  const handleChangeA = (event) => {
    const newName = event.target.value; // what the user typed in
    setUsername(newName);
  };

  const handleChangeB = (event) => {
    const newName = event.target.value; // what the user typed in
    setPassword(newName);
  };

  return (
    <div>
      <h1> Welcome to HNAMAGOTCHI! </h1>
      <h2>Please login! </h2>

      <form onSubmit={handleSubmit}>
        <TextField required id="username" label="Username" variant="outlined" value={username} onChange={handleChangeA} />
        <TextField required id="password" label="Password" variant="outlined" value={password} onChange={handleChangeB} />
        <Button variant="contained" type="submit">Login</Button>
      </form>

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

export default UserLogin;
