// This is an example page component. Copy it to make
// new pages. When you copy it, make sure to add a
// route to the App.jsx file.
import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';
import SignUp from '../components/SignUp';

function SignUpPage() {
  return (
    // You can put other components here.
    // - add link to homepage for back button
    <div>
      <h1> Sign Up! </h1>

      <p>Welcome to HNAmagotchi! </p>
      <SignUp />

      <h2> Already have an account? Login!</h2>
      <Button component={RouterLink} variant="outlined" to="/login">
        Login Page
      </Button>
    </div>

  );
}

export default SignUpPage;
