import Image from 'next/image'

import { Layout } from '../components/layouts'

import { styled } from '@mui/material/styles';

import { useRouter } from 'next/router'

import type { NextPage } from 'next'

import Box from '@mui/material/Box'

import Divider from '@mui/material/Divider'

import Grid from '@mui/material/Grid'

import Typography from '@mui/material/Typography'

import { en } from '../translations/en'
import { es } from '../translations/es'

const HomePage: NextPage = () => {
  const { locale } = useRouter()

  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));

  return (
    <Layout title='Home'>
      <Grid container spacing={2} sx={{ backgroundColor: 'background.default' }}>
        <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
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
            <Divider textAlign="left" sx={{ fontSize: 25 }}>{locale === 'en' ? en.pageHome.c : es.pageHome.c}</Divider>
          </Root>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={"flex-end"} sx={{ position: 'relative' }}>
          <Box sx={{ backgroundColor: 'primary.main', height: '100vh', width: '50%' }}></Box>
          <Box sx={{ position: 'absolute', width: "88%", height: 600, bottom: 0 }}>
            <Image
              src={'/img/perfil.png'}
              alt="Picture of the author"
              layout="fill"
              objectFit="fill"
              quality={100}
            />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
