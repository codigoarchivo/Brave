import { NextPage } from 'next'

import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

import { Layout } from '../../components/layouts'

import { InformationScreen, ContactScreen } from '../../components/ui/contact';

const ContactPage: NextPage = () => {
  return (
    <Layout title={"Contact"}>
      <Container maxWidth='xl' sx={{ margin: { xs: '80px 0', sm: '100px 0', md: '160px 0' } }}>
        <Grid container spacing={6} sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'background.default' }}>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >
            <InformationScreen />
          </Grid>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={"center"} sx={{ paddingBottom: { xs: 3, lg: 0 } }}>
            <ContactScreen />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ContactPage 