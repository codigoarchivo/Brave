import { useContext } from 'react';
import {
    Box,
    Drawer,
    List,
    ListItem,
    Typography
} from '@mui/material';
import { UIContext } from '../../context/ui';
import { SomeButton } from './';
import { RutaLink } from '../routes';

interface Props {
    window?: () => Window;
}

export const Sidebar = (props: Props) => {
    const { window } = props;
    const data = RutaLink()
    const { sidemenuOpen, toggleSideMenu } = useContext(UIContext);
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
                                <SomeButton
                                    {...item}
                                    color={'secondary'}
                                    startIcon={<item.startIcon />}
                                    size={"small"}
                                />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
        </Drawer>
    )
};
