import { Layout } from '../components/layouts'

import type { NextPage } from 'next'

import Grid from '@mui/material/Grid'

import { HomeLeft, HomeRight } from '../components/home';

const HomePage: NextPage = () => {
  return (
    <Layout title='Home'>
      <Grid container spacing={{ sm: 6, md: 0 }} sx={{ backgroundColor: 'background.default' }}>
        <Grid sx={{ marginTop: { xs: 15, sm: 15, md: 0 } }} item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
          <HomeLeft />
        </Grid>
        <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={"flex-end"} sx={{ position: 'relative' }}>
          <HomeRight />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
