import { NextPage } from 'next'

import { Layout } from '../../components/layouts'

import Grid from '@mui/material/Grid'

import Container from '@mui/material/Container';

import { AboutLeft, AboutRight } from '../../components/ui/about';


const About: NextPage = () => {
  return (
    <Layout>
      <Container sx={{ margin: '150px 0' }}>
        <Grid container spacing={0} sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'background.default' }}>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
            <AboutLeft />
          </Grid>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={"center"} sx={{ position: 'relative' }}>
            <AboutRight />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default About