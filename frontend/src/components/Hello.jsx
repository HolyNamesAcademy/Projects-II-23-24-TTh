import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
  getName,
  getGreeting,
  setName,
  setGreeting,
} from '../store/greeting';

const greetingApi = '/api/greeting';

function Hello() {
  const name = useSelector(getName);
  const greeting = useSelector(getGreeting);

  const dispatch = useDispatch();

  const fetchGreeting = async () => {
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
    dispatch(setGreeting(data.greeting));
  };

  const handleChange = (event) => {
    const newName = event.target.value; // what the user typed in
    dispatch(setName(newName));
  };

  const handleSubmit = (e) => {
    // prevent page from reloading when submitting form.
    e.preventDefault();
    fetchGreeting();
  };

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField id="Name" label="Name" variant="outlined" name="Name" value={name} onChange={handleChange} />
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
