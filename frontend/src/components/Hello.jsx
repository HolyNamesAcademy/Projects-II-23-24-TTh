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
  fetchGreeting,
} from '../store/greeting';

function Hello() {
  // Get the two values we need to display, from the store.
  const name = useSelector(getName);
  const greeting = useSelector(getGreeting);

  // This function will let us dispatch changes to the store.
  const dispatch = useDispatch();

  // This function is called whenever the user types in the field.
  const handleChange = (event) => {
    const newName = event.target.value; // what the user typed in
    dispatch(setName(newName));
  };

  // This function is called when the form is submitted.
  const handleSubmit = (e) => {
    // prevent page from reloading when submitting form.
    e.preventDefault();
    dispatch(fetchGreeting);
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
