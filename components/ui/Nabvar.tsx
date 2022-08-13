import React, { useContext } from 'react'

import { UIContext } from '../../context/ui';

import MenuIcon from '@mui/icons-material/Menu';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'

export const Nabvar = () => {

  const { openSideMenu } = useContext(UIContext)
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' onClick={openSideMenu}>
          <MenuIcon />
        </IconButton>
        <Typography variant='h6'>Open Jira</Typography>
      </Toolbar>
    </AppBar>
  )
}
