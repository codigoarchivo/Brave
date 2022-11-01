import { useMemo } from 'react';

import { useRouter } from 'next/router'

import { styled, useTheme } from '@mui/material';

import Box from '@mui/material/Box'

import Divider from '@mui/material/Divider'

import Typography from '@mui/material/Typography'

import { COLOR_ONE } from '../../utils';

import { en, es } from '../../translations';

export const HomeLeft = () => {
    const { locale } = useRouter()

    const theme = useTheme();

    const Root = styled('div')(({ theme }) => ({
        width: '100%',
        ...theme.typography.body2,
        '& > :not(style) + :not(style)': {
            marginTop: theme.spacing(2),
        },
    }));

    return (
        <>
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 130,
                    left: 20,
                    boxShadow: `0em 0em 1em 0.2em ${COLOR_ONE}`,
                    height: '-webkit-fill-available',
                    width: { xs: '60%', sm: '58%', md: '30%' }
                }}
            ></Box>
            <Box
                sx={{
                    width: '100%', textAlign: 'center',
                    margin: { xs: '40px 0', sm: '43px 0', md: '55px 0' },
                    position: 'relative'
                }}
            >
                <Box boxShadow={10} sx={{
                    backgroundColor: 'primary.main',
                    height: { xs: '15vh', sm: '20vh', md: '15vh' },
                    width: '80%',
                    position: 'absolute'
                }}></Box>

                <Typography sx={{
                    typography: { xs: 'h2', sm: 'h1' },
                    position: 'relative',
                    fontWeight: '600 !important',
                }}>
                    {locale === 'en' ? en.pageHome.a : es.pageHome.a}
                </Typography>

                <Typography
                    marginLeft={10}
                    sx={{
                        typography: { xs: 'h2', sm: 'h1' },
                        position: 'relative',
                        fontWeight: '600 !important',
                    }}>
                    {locale === 'en' ? en.pageHome.b : es.pageHome.b}
                </Typography>
            </Box>
            <Root>
                <Divider textAlign="left" sx={{
                    fontSize: { xs: 18, md: 25 },
                    "&::before, &::after": {
                        borderColor: "secondary.light",
                    }
                }}>{locale === 'en' ? en.pageHome.c : es.pageHome.c}</Divider>
            </Root>
        </>
    )
}
