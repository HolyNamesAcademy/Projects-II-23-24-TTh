import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const greetingApi = '/api/'; // add API here once added 

function Hello() {
  
  const [greeting, setGreeting] = useState('');
  const [name, setName] = useState('');

  const getGreeting = async () => {
    // Create the request path
    let path = greetingApi;
    if (name) {
      path += `?name=${name}`;
    }

    // Make the request to the Java API
    const response = await fetch(path);

    // Parse the response from a string into json.
    const data = await response.json();

    // Set the greeting value.
    setGreeting(data.greeting);
  };

  const handleChange = (event) => {
    const newName = event.target.value; // what the user typed in
    setName(newName);
  };

  const handleSubmit = (e) => {
    // prevent page from reloading when submitting form.
    e.preventDefault();
    getGreeting();
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField id="Username" label="Username" variant="outlined" name="Username" value={username} onChange={handleChange} />
          <TextField id="Email" label="Email" variant="outlined" name="Email" value={email} onChange={handleChange} />
          <TextField id="Password" label="Password" variant="outlined" name="Password" value={password} onChange={handleChange} />
          <Button variant="contained" type="submit">Submit</Button>
        </form>

        <Typography variant="h5" color="text.secondary" gutterBottom>
          {greeting}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Hello;
