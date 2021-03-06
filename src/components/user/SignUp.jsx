import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { signup } from '../../api'
import { useNavigate } from "react-router";



export default function SignUp() {

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const signUpObj = Object.fromEntries(
      ['username', 'firstName', 'lastName', 'email', 'password'].map((x) => [x, data.get(x)])
    );
    await signup(signUpObj);
    navigate('/profile');
    event.target.reset();
  };

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
        <Typography 
          component="h1" 
          variant="h1"
          sx={{ fontSize: "2rem" }}
          >
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ m: 3 }}>
          <Grid container spacing={1}>
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
                name="username"
                id="username"
                label="Username"

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
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 1 }}
          >
            <Typography variant="h1" sx={{ fontSize: "1rem" }}>Sign Up</Typography>
          </Button>
          <Grid container justifyContent="flex-end">
            <Box mt="1rem">
              <Grid item>
                <Link href="/signin" variant="p1">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}