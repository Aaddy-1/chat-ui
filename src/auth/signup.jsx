// Mui imports
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// React imports, as well as function imports
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { signUp } from '../services/signInUsers';
import { validateEmail, validatePassword } from '../services/formValidators';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
    palette: {
        mode: 'dark',
    }
});

export default function SignUp() {

  // Checks if the email or password is incorrect
  const [emailIsIncorrect, setEmailIsIncorrect] = useState(0);
  const [passwordIsIncorrect, setPasswordIsIncorrect] = useState(5);
  // Displays the error message if the password is incorrect, else, displays nothing
  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");

  // 0: Too short
  // 1: Too long
  // 2: At least one lowercase
  // 3: At least one uppercase
  // 4: At least one number

  // We will match the number returned to the item in the message array
  const emailErrorMessageArray = ["", "Please enter a valid email address", "This email is already in use"];
  const passwordErrorMessageArray = ["You password must be at least 8 characters", "Your password must not be more than 32 characters", 
  "Your password must have at least one lowercase letter", "Your password must have at least one uppercase letter", 
  "Your password must have at least one number", ""];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sign up triggered");
    const data = new FormData(event.currentTarget);
    console.log(data);
    
    // const emailResult = validateEmail(data.get("email"));
    // const passwordResult = validatePassword(data.get("password"));

    // Checking if email is incorrect and setting the error message
    // setEmailIsIncorrect(emailResult);

    // setEmailMessage(emailErrorMessageArray[emailIsIncorrect]);

    setEmailMessage(validateEmail(data.get('email')));
    console.log(emailMessage);

    // Checking if password is incorrect and setting the error message.
    // setPasswordIsIncorrect(passwordResult);
    // setPasswordMessage(passwordErrorMessageArray[passwordResult]);

    setPasswordMessage(validatePassword(data.get('password')));
    console.log(passwordMessage);

    // TRIGGER WARNING: CRINGE CODE
    
    // if (emailIsIncorrect === 0 && passwordIsIncorrect === 5) {
    //   console.log("everything is correct");
    //   signUp(data.get("email"), data.get("password"), data.get("firstName") + " " + data.get("lastName"))
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   })
    // }
    
    if (emailIsIncorrect === "Valid Email Address" && passwordIsIncorrect === "Success!") {
      console.log("everything is correct");
      signUp(data.get("email"), data.get("password"), data.get("firstName") + " " + data.get("lastName"))
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err.message);
      })
      
    }

  }
  const navigate = useNavigate();
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  // error={emailIsIncorrect === 0 ? false : true}
                  error={emailMessage === "Valid Email Address" ? false : true}
                  helperText={emailMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  // error={passwordIsIncorrect === 5 ? false : true}
                  error={passwordMessage === "Success!" ? false : true}
                  helperText={passwordMessage}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link onClick={() => { navigate('/')}} variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}