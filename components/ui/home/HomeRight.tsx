import Image from 'next/image'

import Box from '@mui/material/Box'

import styles from './HomeRight.module.css'

export const HomeRight = () => {
    return (
        <>
            <Box className={styles['css-10j8ku9']} sx={{ position: 'relative', backgroundColor: 'primary.main', height: { xs: '40vh', sm: '40vh', md: '100vh' }, width: { xs: '100%', md: '50%' } }}></Box>
            <Box className={styles['css-kyrejg']} sx={{ position: 'absolute', width: { xs: '60%', sm: '32%', md: '80%', lg: '100%' }, height: { xs: 220, sm: 210, md: 320, lg: 600, xl: 800 }, bottom: 0 }}>
                <Image
                    src={'/img/perfil.png'}
                    alt="Picture of the author"
                    layout="fill"
                    objectFit="fill"
                    quality={100}
                />
            </Box>
        </>
    )
}
