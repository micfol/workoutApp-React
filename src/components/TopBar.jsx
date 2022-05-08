import * as React from 'react'
import { Avatar, Link, Toolbar, Typography } from '@mui/material'
import { AppBar } from '@mui/material'
import BearClaw from './utilities/Icons/BearClaw'
import {UserContext} from '../context/user.context'


function TopBar() {
 const value = React.useContext(UserContext)
 return ( !value.isLoading &&
      <React.Fragment>
      <AppBar>     
      <Toolbar>
        <Link href="/">
          <BearClaw fontSize='large'/>
        </Link>
        <Typography variant='h1' sx={{flexGrow: 1}}>StrongLiftr</Typography>
        <Link underline="none" href="/profile">
        <Avatar color='secondary' alt={value.user? `${value.user.firstName} ${value.user.lastName}` : null}>
        {value.user ? value.user.firstName.slice(0,1) + value.user.lastName.slice(0,1) : null}
        </Avatar>
        </Link>
      </Toolbar>         
      </AppBar>
      <Toolbar/>
      </React.Fragment>
  )
}

export default TopBar