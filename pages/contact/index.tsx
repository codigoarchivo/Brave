import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Layout } from '../../components/layouts';
import { InformationScreen, ContactScreen } from '../../components/contact';

const ContactPage: NextPage = () => {
  return (
    <Layout title={"Contact"}>
      <Container
        sx={
          {
            height: '100vh',
            display: 'flex',
          }
        }>
        <Grid
          display={'flex'}
          alignItems={'center'}
          container
          spacing={10}
          mt={0}
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
      </Container>
    </Layout>
  )
}

export default ContactPage 