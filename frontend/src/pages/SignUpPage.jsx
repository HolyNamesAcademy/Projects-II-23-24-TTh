// This is an example page component. Copy it to make
// new pages. When you copy it, make sure to add a
// route to the App.jsx file.
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import SignUp from '../components/SignUp';

function SignUpPage() {
  return (
    // You can put other components here.
    // - add link to homepage for back button
    <div>
      <h1> Sign Up! </h1>
      <SignUp />

      <p>Welcome to HNAmagotchi! </p>

      <Button variant="outlined">
        <Link to="/login">
          Login Page
        </Link>
      </Button>

    </div>

  );
}

export default SignUpPage;
