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
      spacing={{ xs: 2, sm: 1, md: 4 }}
      sx={{ position: 'relative' }}
    >
      <Box sx={{ position: 'absolute', border: 'solid', top: { xs: 14, sm: 1, md: -14 }, left: 0, backgroundColor: 'trasparents', height: { xs: locale === 'en' ? '14vh' : '11vh', sm: locale === 'en' ? '18vh' : '22vh', md: '20vh' }, width: { xs: '60%', sm: '50%', md: '54%' } }}></Box>
      <Typography variant={'h1'} sx={{ fontSize: { xs: locale === 'en' ? '5.5rem' : '5.5rem', sm: locale === 'en' ? '6.5rem' : '6.5rem', md: locale === 'en' ? '8.5rem' : '5.8rem' } }} fontWeight={'bold'} component="h2">
        {locale === 'en' ? en.pageAbout.b : es.pageAbout.b}
      </Typography>
      <Box>
        <Typography variant={'h2'} fontWeight={500} sx={{ fontSize: { xs: locale === 'en' ? '2.8rem' : '2.7rem', sm: '3rem', md: '3.75rem' }, position: 'relative', lineHeight: 0.8 }}>
          <span>{locale === 'en' ? en.pageAbout.c : es.pageAbout.c}</span>
          <div>
            <Box sx={{ width: locale === 'en' ? '55%' : '45%' }}>
              <span>{locale === 'en' ? en.pageAbout.d : es.pageAbout.d}</span>
            </Box>
            <Box sx={{ width: { xs: locale === 'en' ? '45%' : '32%', sm: locale === 'en' ? '45%' : '53%' }, position: 'absolute', top: { xs: 36, sm: 40, md: 51 }, left: { xs: locale === 'en' ? 65 : 50, sm: locale === 'en' ? 70 : 55 , md: locale === 'en' ? 86 : 70}, backgroundColor: 'primary.main', height: { xs: '5vh', sm: '10vh', md: '5vh' } }}></Box>
          </div>
        </Typography>
      </Box>
    </Stack>

  )
}
