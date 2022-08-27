import React from 'react'

import { useRouter } from 'next/router'

import Box from '@mui/material/Box'

import Button from '@mui/material/Button'

import Typography from '@mui/material/Typography'

import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import { en, es } from '../../../translations'

import styles from './about.module.css'

export const AboutRight = () => {
    const { locale } = useRouter()
    return (
        <Box>
            <Typography variant={'body1'} sx={{ lineHeight: 1.9, wordBreak: 'break-word', marginBottom: { xs: '1rem', md: '2rem' } }}>{locale === "en" ? en.pageAbout.a : es.pageAbout.a} </Typography>

            <Button sx={{ margin: { xs: '0 0 1rem 6rem', md: '0 0 2rem 6rem' } }} variant="outlined" endIcon={<DownloadForOfflineIcon />}>
                {locale === "en" ? en.pageAbout.e : es.pageAbout.e}
            </Button>
        </Box>
    )
}
