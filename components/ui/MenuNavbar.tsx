import { useContext, FC } from 'react';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import LoginIcon from '@mui/icons-material/Login';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LogoutIcon from '@mui/icons-material/Logout';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import { useTheme, Typography } from '@mui/material';

import { ColorsContext } from '../../context/colors/ColorsContex';
import { COLOR_FIVE } from '../../utils';


interface PropsMenu {
    anchorEl?: Element | ((element: Element) => Element) | null | undefined,
    setAnchorEl: any,
    open: boolean
}

export const MenuNavbar: FC<PropsMenu> = ({ open, anchorEl, setAnchorEl }) => {

    const { toggleColorMode } = useContext(ColorsContext);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();

    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: `drop-shadow(0px 2px 8px ${COLOR_FIVE})`,
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 5,
                    },
                    '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            <MenuItem>
                <Avatar />
                <Typography>Jackson Quintero</Typography>
                <ListItemIcon sx={{ marginLeft: 2 }} onClick={toggleColorMode}>
                    {theme.palette.mode !== 'light' ? <LightModeIcon /> : <DarkModeIcon />}
                </ListItemIcon>
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                    <LoginIcon fontSize="small" />
                </ListItemIcon>
                Sing In
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                </ListItemIcon>
                Sing Up
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Settings fontSize="small" />
                </ListItemIcon>
                Settings
            </MenuItem>
            <MenuItem>
                <ListItemIcon>
                    <Logout fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    )
}
