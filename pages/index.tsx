import { Layout } from '../components/layouts'

import type { NextPage } from 'next'

import Grid from '@mui/material/Grid'

import { HomeLeft, HomeRight } from '../components/ui/home';
import { Container } from '@mui/system';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home'>

      <Container>
        <Grid container spacing={0} sx={{ backgroundColor: 'background.default', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
            <HomeLeft />
          </Grid>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={"flex-end"} sx={{ position: 'relative' }}>
            <HomeRight />
          </Grid>
        </Grid>
      </Container>




    </Layout>
  )
}

export default HomePage
