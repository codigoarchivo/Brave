import type { NextPage } from 'next'

import Image from 'next/image'

import { Layout } from '../components/layouts'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'

import { styled } from '@mui/material/styles';

const HomePage: NextPage = () => {
  const Root = styled('div')(({ theme }) => ({
    width: '100%',
    ...theme.typography.body2,
    '& > :not(style) + :not(style)': {
      marginTop: theme.spacing(2),
    },
  }));
  return (
    <Layout title='Home'>
      <Grid container spacing={2} className={'backgroundWhite'}>
        <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
          <Box sx={{ width: '100%', textAlign: 'center', marginBottom: 10, position: 'relative' }}>
            <Box sx={{ backgroundColor: "#f5c80b", height: '20vh', width: '70%', position: 'absolute', zIndex:-1 }}></Box>
            <Typography variant={'h1'} sx={{ fontWeight: 500 }}>
              Port
            </Typography>
            <Typography variant={'h1'} marginLeft={10} sx={{ fontWeight: 500 }}>
              Folio
            </Typography>
          </Box>
          <Root>
            <Divider textAlign="left" sx={{ fontSize: 25 }}>Desarrollador Full Stack</Divider>
          </Root>
        </Grid>
        <Grid item xs={6} display={'flex'} justifyContent={'center'} alignItems={"flex-end"} sx={{ position: 'relative' }}>
          <Box sx={{ backgroundColor: "#f5c80b", height: '100vh', width: '50%' }}></Box>
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
