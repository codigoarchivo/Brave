import Image from 'next/image'

import Box from '@mui/material/Box'

export const HomeRight = () => {
    return (
        <>
            <Box sx={{ backgroundColor: 'primary.main', height: { xs: '70vh', md: '100vh' }, width: '50%' }}></Box>
            <Box sx={{ position: 'absolute', width: "100%", height: 600, bottom: 0 }}>
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
