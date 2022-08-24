import Image from 'next/image'

import Box from '@mui/material/Box'

export const HomeRight = () => {
    return (
        <>
            <Box sx={{ position: 'relative', backgroundColor: 'primary.main', height: { xs: '40vh', sm: '60vh' ,md: '100vh' }, width: { xs: '100%', md: '50%' } }}></Box>
            <Box sx={{ position: 'absolute', width: { xs: '60%', sm: '36%', md: '100%' }, height: { xs: 280, sm: 300, md: 330, lg: 600, xl: 800 }, bottom: 0 }}>
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
