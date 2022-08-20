import React, { MouseEvent, useContext, useState } from 'react'

import { UIContext } from '../../context/ui';

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { MenuNavbar, Breadcrumb, Sidebar } from './';

import styles from './Nabvar.module.css'

export const Nabvar = () => {

  const { toggleSideMenu } = useContext(UIContext)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <AppBar elevation={0}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <IconButton className={styles.box__iconButton} size='large' edge='start' onClick={toggleSideMenu}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>Jackson Quintero</Typography>
          </Box>

          <Box className={styles.box__tooltip}>
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
        <Box className={styles.box__breadcrumb}>
          <Breadcrumb />
        </Box>
      </AppBar>
      <Box className={styles.box__sidebar}>
        <Sidebar />
      </Box>
    </>
  )
}
