import Image from 'next/image'

import Box from '@mui/material/Box'

import styles from './HomeRight.module.css'

export const HomeRight = () => {
    return (
        <>
            <Box className={styles['box__background-yellod']} sx={{ position: 'relative', backgroundColor: 'primary.main', height: { xs: '40vh', sm: '55vh', md: '100vh' }, width: { xs: '50%', md: '50%' } }}></Box>
            <Box className={styles['box__background-transparents']} sx={{ position: 'absolute', border: 'solid', bottom: 20, left: 20, backgroundColor: 'trasparents', height: { xs: '30vh', sm: '37vh', md: '71vh' }, width: { xs: '60%', sm: '58%', md: '68%' } }}></Box>
            <Box className={styles['box__image']} sx={{ position: 'absolute', width: { xs: '60%', sm: '26%', md: '80%', lg: '100%' }, height: { xs: 218, sm: 137, md: 320, lg: 600, xl: 800 }, bottom: 0 }}>
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
