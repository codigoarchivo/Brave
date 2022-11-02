import { useMemo } from 'react';

import { useRouter } from 'next/router'

import { Stack, styled, useTheme } from '@mui/material';

import Box from '@mui/material/Box'

import Divider from '@mui/material/Divider'

import Typography from '@mui/material/Typography'

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
                    width: '100%', textAlign: 'center',
                    margin: { xs: '40px 0', sm: '43px 0', md: '55px 0' },
                    position: 'relative'
                }}
            >

                <Stack spacing={15} width='100%'>
                    <Box
                        className='box_color'
                        boxShadow={24}
                        sx={{
                            backgroundColor: 'primary.main',
                            width: '80%',
                            position: 'absolute'
                        }}>

                        <Typography
                            color={theme.palette.text.secondary}
                            sx={{
                                typography: { xs: 'h2', sm: 'h1' },
                                position: 'relative',
                                fontWeight: '600 !important',
                            }}>
                            {locale === 'en' ? en.pageHome.a : es.pageHome.a}
                        </Typography>
                    </Box>

                    <Typography
                        marginLeft={16}
                        color={theme.palette.text.secondary}
                        sx={{
                            typography: { xs: 'h2', sm: 'h1' },
                            position: 'relative',
                            fontWeight: '600 !important',
                        }}>
                        {locale === 'en' ? en.pageHome.b : es.pageHome.b}
                    </Typography>
                </Stack>
            </Box>
            <Root>
                <Divider
                    color={theme.palette.text.secondary}
                    textAlign="left" sx={{
                        fontSize: { xs: 18, md: 30 },
                        "&::before, &::after": {
                            borderColor: theme.palette.text.secondary,
                        }
                    }}>{locale === 'en' ? en.pageHome.c : es.pageHome.c}</Divider>
            </Root>
        </>
    )
}
