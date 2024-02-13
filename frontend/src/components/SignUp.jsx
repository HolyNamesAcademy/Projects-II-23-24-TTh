import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const userApi = '/api/users/UserApiController';
// https://www.knowledgehut.com/blog/web-development/building-a-sign-up-form-using-react
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function SignUp() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Make the request to the Java API
  // Example POST method implementation:
  const postData = async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
  };

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
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

  const createUser = async () => {
    const data = {
      name,
      password,
      email,
    };

    console.log(data);

    const user = await postData(userApi, data);
    // eslint-disable-next-line no-console
    console.log(user);
  }

  const handleSubmit = (e) => {
    // prevent page from reloading when submitting form.
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
      return;
    }
    setSubmitted(true);
    setError(false);

    createUser()
  };

  const successMessage = () => (
    <div>
      <h1>
        {' '}
        User
        {name}
        {' '}
        registered successfully!
        {' '}
      </h1>
    </div>
  );

  const errorMessage = () => (
    <div>
      <h1> Failed to submit. Please try again! </h1>
    </div>
  );

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className="Form">
          {errorMessage()}
          {successMessage()}
          {submitted}
          {error}
        </div>

        <form>
          <TextField id="Username" label="Username" variant="outlined" name="Username" value={name} onChange={handleName} />
          <TextField id="Email" label="Email" variant="outlined" name="Email" value={email} onChange={handleEmail} />
          <TextField id="Password" label="Password" variant="outlined" name="Password" value={password} onChange={handlePassword} />
          <Button variant="contained" type="submit" onSubmit={handleSubmit}>Submit</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default SignUp;
