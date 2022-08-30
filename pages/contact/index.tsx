import { NextPage } from 'next'

import Container from '@mui/material/Container';

import Grid from '@mui/material/Grid';

import { Layout } from '../../components/layouts'

import { ContactScreen } from '../../components/ui/contact/ContactScreen';

const ContactPage: NextPage = () => {
  return (
    <Layout title={"Contact"}>
      <Container maxWidth="lg" sx={{ margin: { xs: '80px 0', sm: '100px 0', md: '150px 0' } }}>

        <Grid container spacing={{ xs: 2, sm: 5, md: 0 }} sx={{ height: 'calc(100vh - 250px)', backgroundColor: 'background.default' }}>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'} >

          </Grid>
          <Grid item xs={12} sm={12} md={6} display={'flex'} justifyContent={'center'} alignItems={"center"} sx={{ position: 'relative' }}>
             <ContactScreen />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ContactPage 