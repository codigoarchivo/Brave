import React from 'react'

import { useRouter } from 'next/router'

import Box from '@mui/material/Box'

import Stack from '@mui/material/Stack'

import Typography from '@mui/material/Typography'

import { en, es } from '../../../translations'

export const AboutLeft = () => {
  const { locale } = useRouter()

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
    >
      <Box sx={{ position: 'absolute', border: 'solid', top: 300 , left: 20, backgroundColor: 'trasparents', height: { xs: '30vh' }, width: { xs: '23%' } }}></Box>
      <Typography variant={'h1'} sx={{ fontSize: '8.5rem' }} fontWeight={'bold'} component="h2">
        {locale === 'en' ? en.pageAbout.b : es.pageAbout.b}
      </Typography>
      <Box>
        <Typography variant={'h2'} fontWeight={500}>
          {locale === 'en' ? en.pageAbout.c : es.pageAbout.c}
        </Typography>
        <Typography variant={'h2'} fontWeight={500}>
          {locale === 'en' ? en.pageAbout.d : es.pageAbout.d}
        </Typography>
      </Box>
    </Stack>

  )
}
