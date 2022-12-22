import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import { en, es } from '../../translations';

export const AboutLeft = () => {
  const { locale } = useRouter();
  const matches = useMediaQuery('(max-width:281px)');

  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent={'center'}
      alignItems={'center'}
      spacing={{ xs: 2, sm: 1, md: 6 }}
      width={'100%'}
    >
      <Box
        className='box_color'
        boxShadow={24}
        display='flex'
        sx={{
          backgroundColor: 'primary.main',
          position: 'relative',
          height: {
            lg: 200,
            xl: 300
          },
          width: {
            xs: locale === 'en' ? '50%' : matches ? '70%' : '50%',
            sm: locale === 'en' ? '50%' : '48%',
            lg: locale === 'en' ? '50%' : '60%',
            xl: locale === 'en' ? '50%' : '80%',
          },

        }}
      >
        <Typography
          color={'text.secondary'}
          variant={'h1'}
          p={1}
          sx={{
            fontSize: {
              xs: locale === 'en' ? '5.5rem' : '4.5rem',
              sm: locale === 'en' ? '10rem' : '8rem',
              md: locale === 'en' ? '8.5rem' : '6.5rem',
              lg: locale === 'en' ? '12rem' : '9rem',
              xl: locale === 'en' ? '15rem' : '11rem'
            },
          }}
          fontWeight={'bold'}
          component="h2"
        >
          {locale === 'en' ? en.pageAbout.b : es.pageAbout.b}
        </Typography>
      </Box>


      <Typography
        color={'text.secondary'}
        variant={'h2'}
        fontWeight={500}
        sx={{
          fontSize: {
            xs: locale === 'en' ? '2.8rem' : '2.7rem',
            sm: '6rem',
            md: '4rem',
            xl: locale === 'en' ? '6rem' : '5.8rem'
          },
          position: 'relative',
          lineHeight: 0.9
        }}
      >
        <span>{locale === 'en' ? en.pageAbout.c : es.pageAbout.c}</span>
        <Box display='flex'>
          <span>{locale === 'en' ? en.pageAbout.d : es.pageAbout.d}</span>
          <Box
            ml={1}
            sx={{
              height: 'auto',
              width: '40%',
              backgroundColor: 'primary.main',
            }}
          ></Box>
        </Box>
      </Typography>
    </Stack>

  )
}
