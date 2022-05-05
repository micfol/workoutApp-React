import { login } from "../../api";
import * as React from 'react';
import { FormControlLabel, Container, Avatar, Button, Checkbox, Link, Grid, Box, Typography, TextField, } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../utilities/Copyright';
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router";


export default function SignIn() {

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = React.useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await login({ email: data.get('email'), password: data.get('password') });
    storeToken(response.data.authToken);
    authenticateUser();
    navigate("/");
  }

  return (
    <Container component="main" maxWidth="xs">
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Username"
            name="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright/>
    </Container>
  );
}