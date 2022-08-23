import React, { MouseEvent, useContext, useState } from 'react'

import { UIContext } from '../../context/ui';

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { useScrollTrigger } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { MenuNavbar, Breadcrumb, Sidebar } from './';

interface Props {
  window?: () => Window;
}

export const Nabvar = (props: Props) => {
  const { window } = props;
  const { toggleSideMenu } = useContext(UIContext)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <AppBar elevation={trigger ? 6 : 0} sx={{ backgroundColor: trigger ? 'primary.main' : 'transparent', transition: 'all .6s' }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            <IconButton sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' } }} size='large' edge='start' onClick={toggleSideMenu}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>Jackson Quintero</Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
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
        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Breadcrumb />
        </Box>
      </AppBar>
      <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}>
        <Sidebar />
      </Box>
    </>
  )
}
