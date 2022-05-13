import { login } from "../../api";
import  {React, useContext} from 'react';
import { FormControlLabel, Container, Avatar, Button, Checkbox, Link, Grid, Box, Typography, TextField, } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Copyright from '../utilities/Copyright';
import { UserContext } from "../../context/user.context";
import { useNavigate } from "react-router";
import styled from '@emotion/styled';


export default function SignIn() {

  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const response = await login({ username: data.get('username'), password: data.get('password') });
    storeToken(response.data.authToken);
    authenticateUser();
    navigate('/');
  }

  const SetTextField = styled(TextField)(() => ({
    fontFamily: 'Open Sans',
    fontSize: '1rem',
  }));

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="p1" fontSize={'2rem'}>
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
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