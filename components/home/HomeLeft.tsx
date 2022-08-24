import { useRouter } from 'next/router'

import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box'

import Divider from '@mui/material/Divider'

import Typography from '@mui/material/Typography'

import { en } from '../../translations/en';
import { es } from '../../translations/es';



export const HomeLeft = () => {
    const { locale } = useRouter()

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
            marginTop: theme.spacing(2),
        },
    }));

    return (
        <>
            <Box sx={{ width: '100%', textAlign: 'center', margin: { xs: '40px 0', sm: '43px 0', md: '55px 0' }, position: 'relative' }}>
                <Box sx={{ backgroundColor: 'primary.main', height: { xs: '15vh', sm: '20vh', md: '15vh' }, width: '70%', position: 'absolute' }}></Box>
                <Typography sx={{ typography: { xs: 'h2', sm: 'h1' }, position: 'relative' }}>
                    {locale === 'en' ? en.pageHome.a : es.pageHome.a}
                </Typography>
                <Typography marginLeft={10} sx={{ typography: { xs: 'h2', sm: 'h1' }, position: 'relative' }}>
                    {locale === 'en' ? en.pageHome.b : es.pageHome.b}
                </Typography>
            </Box>
            <Root>
                <Divider textAlign="left" sx={{
                    fontSize: 25,
                    "&::before, &::after": {
                        borderColor: "secondary.light",
                    }
                }}>{locale === 'en' ? en.pageHome.c : es.pageHome.c}</Divider>
            </Root>
        </>
    )
}
