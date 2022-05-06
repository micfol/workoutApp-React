import { React, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user.context";
import { updateUser } from '../../api'

import { Icon, Container, Box, Avatar, Typography, Grid, TextField, Button } from "@mui/material"
import Loading from '../utilities/Loading'
import { Edit } from "@mui/icons-material";
import { IsPrivate } from "../IsPrivate";


function Profile() {

  const { storeToken, authenticateUser, user, setUser, isLoading, logoutUser } = useContext(UserContext);

  const [readOnly, setReadOnly] = useState({ readOnly: true, variant: 'standard' })

  const onclickEditUser = (e) => {
    e.preventDefault()
    setReadOnly({ readOnly: false, variant: 'outlined' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const signUpObj = Object.fromEntries(
      ['username', 'firstName', 'lastName', 'email', 'password']
        .map((x) => [x, data.get(x)])
    )
    signUpObj._id = user._id
    const response = await updateUser(signUpObj)
    storeToken(response.data.authToken);
    authenticateUser();
    setUser(response.data.updatedUser)
    setReadOnly({ readOnly: true, variant: 'standard' })

  }


  return (
    <IsPrivate>
    {(!user)
      ? <Loading />
      : <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main', height: 40, width: 40 }}>
          <Icon><Edit/></Icon>
          </Avatar>
          
          <Typography component="h1" variant="h5">
            Profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  disabled={readOnly.readOnly}
                  variant={readOnly.variant}
                  name="firstName"
                  required
                  fullWidth
                  defaultValue={user.firstName}
                  id="firstName"

                  label="First Name"
                  autoFocus

                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  disabled={readOnly.readOnly}
                  variant={readOnly.variant}
                  defaultValue={user.lastName}
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
                  disabled={readOnly.readOnly}
                  variant={readOnly.variant}
                  defaultValue={user.username}
                  name="username"
                  id="username"
                  label="Username"

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  disabled={readOnly.readOnly}
                  variant={readOnly.variant}
                  defaultValue={user.email || null}
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            {readOnly.readOnly
              ? <Button onClick={onclickEditUser} fullWidth variant="outlined" sx={{ mt: 2, mb: .5 }} >
                Edit User
              </Button>
              : <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: .5 }} >
                Update
              </Button>}
              <Button onClick={logoutUser} fullWidth variant="outlined" sx={{ mt: 2, mb: 1 }} >
              Logout
              </Button>
          </Box>
        </Box>
      </Container>
    }
      </IsPrivate>
  )
}

export default Profile