
import Link from 'next/link'

import { useRouter } from 'next/router';

import { grey } from '@mui/material/colors';

import { SxProps } from '@mui/system';

import { useTheme } from '@mui/material/styles';

import Fab from '@mui/material/Fab';

import Zoom from '@mui/material/Zoom';

export const FloatingButton = () => {
    // useTheme
    const theme = useTheme();
    // useRouter
    const { asPath } = useRouter();


    const transitionDuration = {
        enter: theme.transitions.duration.enteringScreen,
        exit: theme.transitions.duration.leavingScreen,
    };

    const fabStyle1 = {
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 20,
    };

    const fabStyle2 = {
        position: 'absolute',
        bottom: 16,
        right: 16,
        left: 65,
        '&:hover': {
            bgcolor: grey[800],
        },
    };

    const fabs = [
        {
            color: 'primary' as 'primary',
            sx: fabStyle1 as SxProps,
            label: 'en',
        },
        {
            color: 'secondary' as 'secondary',
            sx: fabStyle2 as SxProps,
            label: 'es',
        },
    ];


    return (
        <>
            {fabs.map((fab, index) => (
                <div key={fab.color} >
                    <Link href={asPath} locale={fab.label}>
                        <Zoom

                            in={true}
                            timeout={transitionDuration}
                            style={{
                                transitionDelay: `${index ? transitionDuration.exit : 0}ms`,
                            }}
                            unmountOnExit
                        >

                            <Fab size="small" sx={fab.sx} aria-label={fab.label} color={fab.color}>
                                {fab.label}
                            </Fab>
                        </Zoom>
                    </Link>
                </div>
            ))}
        </>
    )
}
