import { NextPage } from 'next'

import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

import { Layout } from '../../components/layouts'

import { InformationScreen, ContactScreen } from '../../components/contact';

const ContactPage: NextPage = () => {
  return (
    <Layout title={"Contact"}>
      <Grid
        display={'flex'}
        alignItems={'center'}
        container
        spacing={6}
        sx={{ height: '100vh', backgroundColor: 'background.default' }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'} >
          <InformationScreen />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          display={'flex'}
          justifyContent={'center'}
          alignItems={"center"}
          sx={{ paddingBottom: { xs: 3, lg: 0 } }}
        >
          <ContactScreen />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default ContactPage 