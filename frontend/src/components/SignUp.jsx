import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import {
  signup,
} from '../store/user';

function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const successMessage = () => (
    <div>
      <h1>
        {' '}
        User
        {' '}
        {name}
        {' '}
        registered successfully!
        {' '}
      </h1>
    </div>
  );

  const handleSubmit = (e) => {
    // prevent page from reloading when submitting form.
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
      return;
    }
    setSubmitted(true);
    setError(false);

    dispatch(signup(username, name, email, password));
    // createUser();
  };

  const errorMessage = () => (
    <div>
      <h1> Failed to submit. Please try again! </h1>
    </div>
  );

  function isSubmitted() {
    if (submitted) {
      return successMessage();
    }
    if (error) {
      return errorMessage();
    }
    return '';
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="Form">
          {isSubmitted()}
          {submitted}
          {error}
        </div>

        <form onSubmit={handleSubmit}>
          <TextField required id="Username" label="Username" variant="outlined" name="Username" value={username} onChange={handleUsername} />
          <TextField required id="Name" label="Name" variant="outlined" name="Name" value={name} onChange={handleName} />
          <TextField required id="HNA Email" label="Email" variant="outlined" name="Email" value={email} onChange={handleEmail} />
          <TextField required type="password" id="Password" label="Password" variant="outlined" name="Password" value={password} onChange={handlePassword} />
          <Button variant="contained" type="submit">Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}
// redirect to login page when done

export default SignUp;
