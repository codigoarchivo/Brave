import { NextPage } from 'next'

import { Layout } from '../../components/layouts'

import Grid from '@mui/material/Grid'

import Container from '@mui/material/Container';

import { AboutLeft, AboutRight } from '../../components/about';


const About: NextPage = () => {
  return (
    <Layout title={'About'}>
      <Container>
        <Grid
          container
          display={'flex'}
          alignItems={'center'}
          py={{ xs: 10, md: 14 }}
          spacing={{ xs: 3, sm: 5, md: 0 }}
          sx={{ height: '100vh', backgroundColor: 'background.default' }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={7}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={'column'}
          >
            <AboutLeft />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            display={'flex'}
            justifyContent={'center'}
            alignItems={"center"}
            sx={{ position: 'relative' }}
          >
            <AboutRight />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default About