import React, { MouseEvent, useContext, useState } from 'react'

import { UIContext } from '../../context/ui';

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import useTheme from '@mui/material/styles/useTheme';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { MenuNavbar, Breadcrumb, Sidebar } from './';

export const Nabvar = () => {

  const { openSideMenu } = useContext(UIContext)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <AppBar position='sticky' elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ display: matches ? "none" : "flex" }} size='large' edge='start' color='inherit' onClick={openSideMenu}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>Jackson Quintero</Typography>
          </Box>

          <Box sx={{ display: matches ? "flex" : "none", alignItems: 'center', textAlign: 'center' }}>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <MoreVertIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <MenuNavbar anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Toolbar>
      </AppBar>
      <Breadcrumb />
      <Sidebar />
    </>
  )
}
