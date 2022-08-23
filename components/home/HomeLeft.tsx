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
            <Box sx={{ width: '100%', textAlign: 'center', marginBottom: 10, position: 'relative' }}>
                <Box sx={{ backgroundColor: 'primary.main', height: '20vh', width: '70%', position: 'absolute' }}></Box>
                <Typography variant={'h1'} sx={{ fontWeight: 500, position: 'relative' }}>
                    {locale === 'en' ? en.pageHome.a : es.pageHome.a}
                </Typography>
                <Typography variant={'h1'} marginLeft={10} sx={{ fontWeight: 500, position: 'relative' }}>
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
