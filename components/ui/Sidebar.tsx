import { useContext } from 'react';

import { UIContext } from '../../context/ui';

import { Box, Drawer, List, ListItem, Typography } from '@mui/material';

import { rutaLink, SomeButton } from './';

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
                        rutaLink.map((item, key) => (
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
