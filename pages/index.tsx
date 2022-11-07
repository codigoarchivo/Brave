import { Layout } from '../components/layouts'

import type { NextPage } from 'next'

import Grid from '@mui/material/Grid'

import { HomeLeft, HomeRight } from '../components/home';


const HomePage: NextPage = () => {
  return (
    <Layout title='Home'>
      <Grid
        container
        spacing={0}
        height={{ xs: '90vh', md: '100vh' }}
        position='relative'
      >
        <div id="particle-container">
          {[...Array(30)].map((v, i) => <div key={i} className="particle"></div>)}
        </div>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          display={'grid'}
          sx={{ position: 'relative', textAlign: 'center' }}
        >
          <HomeLeft />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          display={{ xs: 'none', md: 'flex' }}
          justifyContent={'center'}
          alignItems={"flex-end"}
          sx={{ position: 'relative' }}>
          <HomeRight />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
