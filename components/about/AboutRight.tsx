import React from 'react'

import { useRouter } from 'next/router'

import Box from '@mui/material/Box'

import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import { en, es } from '../../translations'
import { useMediaQuery } from '@mui/material'

export const AboutRight = () => {
    const { locale } = useRouter();

    const matches = useMediaQuery('(max-width:420px)');

    return (
        <Box display={'grid'}>
            <Typography
                className={'about__text-p'}
                variant={'body1'}
                p={1}
                sx={{
                    lineHeight: 1.9,
                    wordBreak: 'break-word',
                    marginBottom: { xs: '1rem', md: '2rem' },
                    fontSize: {
                        xs: locale === 'en' ? '1.1rem !important' : '1.1rem !important',
                        sm: locale === 'en' ? '1.2rem !important' : '1.2rem !important',
                        lg: locale === 'en' ? '1.3rem !important' : '1.3rem !important',
                        xl: locale === 'en' ? '1.6rem !important' : '1.5rem !important'
                    }
                }}>
                {locale === "en" ? en.pageAbout.a : es.pageAbout.a}
            </Typography>

            <Button
                href={
                    locale === "en"
                        ? '/pdf/curriculun_English.pdf'
                        : '/pdf/curriculun_Español.pdf'
                }
                target="_blank"
                sx={{
                    margin: { xs: '0 0 1rem 10rem', md: '0 0 2rem 10rem' },
                    width: matches ? 'min-content' : 'max-content'
                }}
                variant="outlined"
                endIcon={<DownloadForOfflineIcon />}
            >
                {locale === "en" ? en.pageAbout.e.slice(matches ? 8 : 0) : es.pageAbout.e.slice(matches ? 9 : 0)}
            </Button>
        </Box>
    )
}
