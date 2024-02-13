import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const userApi = '/api/users/UserApiController'; 
// https://www.knowledgehut.com/blog/web-development/building-a-sign-up-form-using-react
// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


function SignUp() { 
  
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const getGreeting = async () => {
    // Create the request path
    let path = userApi; 

    // Make the request to the Java API
    const response = await fetch(path);
    const [submitted, setSubmitted] = useState(false); 
    const [error, setError] = useState(false); 

    // Example POST method implementation:
  async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

postData("https://example.com/answer", { answer: "Name: " , name, "Email: ", email, "Password: ", password }).then((data) => {
  console.log(data); // JSON data parsed by `data.json()` call
});


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

  const handleSubmit = (e) => {
    // prevent page from reloading when submitting form.
    e.preventDefault();
    if (name == '' || email == '' || password == ''){
      setError = true; 
    }
    else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div>
        <h1> User {name} registered successfully! </h1>
      </div>
    );
  }

  const errorMessage = () => {
    return (
      <div>
      <h1> Failed to submit. Please try again! </h1>
      </div>
    );
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div className='Form'>
          {errorMessage()}
          {successMessage()}
        </div>

        <form>
          <TextField id="Username" label="Username" variant="outlined" name="Username" value={username} onChange={handleName} />
          <TextField id="Email" label="Email" variant="outlined" name="Email" value={email} onChange={handleEmail} />
          <TextField id="Password" label="Password" variant="outlined" name="Password" value={password} onChange={handlePassword} />
          <Button variant="contained" type="submit" onSubmit={handleSubmit}>Submit</Button>
        </form>

        <Typography variant="h5" color="text.secondary" gutterBottom>
          {greeting}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Hello;
