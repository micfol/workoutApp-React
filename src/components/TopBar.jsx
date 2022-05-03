import React from 'react'
import { Avatar, Icon, IconButton, Toolbar, Typography } from '@mui/material'
import { AppBar } from '@mui/material'
import BearClaw from './utilities/Icons/BearClaw'

function TopBar() {
  return (
      <React.Fragment>
      <AppBar>     
      <Toolbar>
        <BearClaw fontSize='large'/>
        <Typography variant='h1' sx={{flexGrow: 1}}>StrongLiftr</Typography>
        <Avatar>
          JG
        </Avatar>
      </Toolbar>         
      </AppBar>
      <Toolbar/>
      </React.Fragment>
  )
}

export default TopBar