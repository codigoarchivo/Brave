import { useContext } from 'react';

import { UIContext } from '../../context/ui';

import { Box, Drawer, List, ListItem, Typography } from '@mui/material';

import {  SomeButton } from './';

import { RutaLink } from '../routes';

interface Props {
    window?: () => Window;
}

export const Sidebar = (props: Props) => {
    const { window } = props;
    // useContext
    const { sidemenuOpen, toggleSideMenu } = useContext(UIContext);
    // rutaLink
    const data = RutaLink()

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Drawer
            container={container}
            anchor="left"
            open={sidemenuOpen}
            onClose={toggleSideMenu}
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
