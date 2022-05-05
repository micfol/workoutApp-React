import {React, useContext } from 'react'
import { UserContext } from "../context/user.context";
import { Avatar, Icon, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { AppBar } from '@mui/material'
import BearClaw from './utilities/Icons/BearClaw'


function TopBar() {
  
  const user = useContext(UserContext)
  console.log(user)
  return (
      <React.Fragment>
      <AppBar>     
      <Toolbar>
        <BearClaw fontSize='large'/>
        <Typography variant='h1' sx={{flexGrow: 1}}>StrongLiftr</Typography>
        <Link href="/profile"><Avatar>
          JG
        </Avatar>
        </Link>
      </Toolbar>         
      </AppBar>
      <Toolbar/>
      </React.Fragment>
  )
}

export default TopBar