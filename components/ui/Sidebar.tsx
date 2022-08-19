import { useContext } from 'react';

import { UIContext } from '../../context/ui';

import { Box, Drawer, List, ListItem, Typography } from '@mui/material';

import { rutaLink, SomeButton } from './';

export const Sidebar = () => {
    // useContext
    const { sidemenuOpen, closeSideMenu } = useContext(UIContext);
    // rutaLink
    const data = rutaLink()


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
                        data.map((item, key) => (
                            <ListItem key={key}>
                                <SomeButton  {...item} color={'secondary'} startIcon={<item.startIcon />} size={"small"} />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
};
