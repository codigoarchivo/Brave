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
        fontFamily: 'Brush Script MT',
        color: theme.palette.text.secondary,
    }));

    const sizeh1 = {
        xs: 80,
        lg: 100,
        xl: 130
    }

    return (

        <>

            <Stack pt={{ xs: 18, lg: 30, xl: 32 }} spacing={{ xs: 17, lg: 16, xl: 22 }} width='100%'>
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
                            fontSize: sizeh1,
                            position: 'relative',
                            fontWeight: '600 !important',
                            fontFamily: 'Optima',
                        }}>
                        {locale === 'en' ? en.pageHome.a : es.pageHome.a}
                    </Typography>
                </Box>

                <Typography
                    marginLeft={16}
                    color={theme.palette.text.secondary}
                    sx={{
                        fontSize: sizeh1,
                        position: 'relative',
                        fontWeight: '600 !important',
                        fontFamily: 'Optima',
                    }}>
                    {locale === 'en' ? en.pageHome.b : es.pageHome.b}
                </Typography>
                <Root>
                    <Divider
                        textAlign="left" sx={{
                            fontSize: { xs: 22, lg: 40, xl: 60 },
                            "&::before, &::after": {
                                borderColor: theme.palette.text.secondary,
                            }
                        }}>{locale === 'en' ? en.pageHome.c : es.pageHome.c}</Divider>
                </Root>
            </Stack>
        </>
    )
}
