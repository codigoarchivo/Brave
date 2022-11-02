import Image from 'next/image';

import { useTheme } from '@mui/material';

import Box from '@mui/material/Box';

export const HomeRight = () => {

    return (
        <>
            <Box
                className={'box__background-color'}
                sx={{
                    position: 'relative',
                    backgroundColor: 'primary.main',
                    width: { xs: '50%', md: '50%' }
                }}
            ></Box>

            <Box
                className={'box__image'}
                sx={{
                    position: 'absolute',
                    width: { xs: '60%', sm: '26%', md: '80%', lg: '100%' },
                    height: { xs: 218, sm: 137, md: 320, lg: 600, xl: 800 }, bottom: 0
                }}>
                <Image
                    src={'/img/perfil.png'}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="fill"
                />
            </Box>
        </>
    )
}
