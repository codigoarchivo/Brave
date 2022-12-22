import { NextPage } from 'next';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { EffectCoverflow, Pagination } from "swiper";
import { WorkScreen } from '../../components/work';
import { Layout } from '../../components/layouts';


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const WorkPage: NextPage = () => {
  const data = [
    {
      name: 'Proyecto #1',
      description: 'JavaScript, css, html, react, node.js',
      status: 'proceso',
      image: '/img/perfil.png',
    },
    {
      name: 'Proyecto #2',
      description: 'typeScript, css, html, react, node.js',
      status: 'proceso',
      image: '/img/perfil.png',
    },
    {
      name: 'Proyecto #3',
      description: 'python, css, html, react, node.js',
      status: 'terminate',
      image: '/img/perfil.png',
    },
  ]
  return (
    <Layout title={"Work"}>
      <Container maxWidth='xl'>
        <Stack
          justifyContent={'center'}
          alignItems='center'
          height={'calc(100vh - 5px)'}
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {
              data.map((item, key) => (
                <SwiperSlide
                  key={key}
                  style={{ width: '300px' }}
                  className='shadow-secondary'
                >
                  <WorkScreen  {...item} idx={key + 1} />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Stack>

      </Container>
    </Layout>
  )
}

export default WorkPage