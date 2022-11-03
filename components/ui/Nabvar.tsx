import React, { MouseEvent, useContext, useEffect, useRef, useState } from 'react'

import { useRouter } from 'next/router';

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { LinearProgress, useScrollTrigger } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { MenuNavbar, Breadcrumb, Sidebar, SomeButton } from './';

import { UIContext } from '../../context/ui';

import { COLOR_FOUR } from '../../utils';


interface Props {
  window?: () => Window;
}

export const Nabvar = (props: Props) => {

  const { asPath } = useRouter()

  const { window } = props;

  const { toggleSideMenu, lineProgress } = useContext(UIContext);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [progress, setProgress] = useState(0);

  const [buffer, setBuffer] = useState(10);

  const progressRef = useRef(() => { });

  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100 || !lineProgress) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    if (!lineProgress) {
      setProgress(0);
      setBuffer(10);
      return;
    }

    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => clearInterval(timer);

  }, []);

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
      <AppBar component="nav" elevation={1} sx={{ backgroundColor: trigger ? 'primary.main' : asPath === '/' ? 'transparent' : 'primary.main', transition: 'all .6s' }}>
        <Box sx={{ width: '100%', position: 'fixed' }}>
          {
            !lineProgress
              ? <></>
              : <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} />
          }
        </Box>
        <Toolbar sx={{ minHeight: { xs: '48px', md: '64px' }, justifyContent: "space-between" }}>
          <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
            {/* button in movil */}
            <IconButton
              sx={{
                display: { xs: 'flex', sm: 'flex', md: 'none' }
              }}
              size='large' edge='start'
              onClick={toggleSideMenu}
            >
              <MenuIcon />
            </IconButton>


            <SomeButton
              name={<Avatar sx={{
                boxShadow: `${asPath !== '/' ? COLOR_FOUR : ''}`,
                cursor: 'pointer',
              }}
                alt="Codigo Archivo"
                src="favicon.ico"
              />
              }
              href={'/'}
            />
            <Box position={'relative'} >
              <Box className="content">
                <div className="content__container" >
                  <Typography variant='h6' component='h6' className="content__container__text">
                    Hello
                  </Typography>
                  <ul className="content__container__list">
                    <li className="content__container__list__item">world !</li>
                    <li className="content__container__list__item">Jackson !</li>
                    <li className="content__container__list__item">users !</li>
                    <li className="content__container__list__item">everybody !</li>
                  </ul>
                </div>
              </Box>
            </Box>

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
        </Toolbar>

        <Box display='flex'>
          <MenuNavbar open={open} anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
        </Box>

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
