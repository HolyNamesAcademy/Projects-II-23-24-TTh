// This is an example page component. Copy it to make
// new pages. When you copy it, make sure to add a
// route to the App.jsx file.
import SignUp from '../components/SignUp';

function SignUpPage() {
  return (
    // You can put other components here.
    // - add link to homepage for back button
    <div>
      <h1> Sign Up! </h1>
      <SignUp />
      <p>

        <button type="submit" value="Submit">Back</button>
      </p>
    </div>

  );
}

export default SignUpPage;
