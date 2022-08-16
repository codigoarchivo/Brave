import { useContext } from 'react';

import { UIContext } from '../../context/ui';

import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';

import { RutaLink } from './';

import { SomeButton } from '../../helper';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']


export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu } = useContext(UIContext);


    return (
        <Drawer
            anchor="left"
            open={sidemenuOpen}
            onClose={closeSideMenu}
        >
            <Box sx={{ width: 250 }}>

                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {
                        RutaLink.map((item, key) => (
                            <ListItem key={key}>
                                <SomeButton  {...item} startIcon={<item.startIcon />} size={"small"} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
};
