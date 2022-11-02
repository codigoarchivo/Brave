import React, { useRef, useState } from "react";
import Container from '@mui/material/Container'
import { NextPage } from 'next'

import { Layout } from '../../components/layouts'
import { WorkScreen } from '../../components/work'

import Stack from '@mui/material/Stack';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { EffectCoverflow, Pagination } from "swiper";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const WorkPage: NextPage = () => {
  const data = [
    {
      name: 'JavaScript 1',
      description: 'hola',
      status: 'proceso',
      image: '/img/perfil.png',
    },
    {
      name: 'JavaScript 2',
      description: 'hola',
      status: 'pending',
      image: '/img/perfil.png',
    },
    {
      name: 'JavaScript 3',
      description: 'hola',
      status: 'termimate',
      image: '/img/perfil.png',
    },
  ]
  return (
    <Layout title={"Work"}>
      <Container>
        <Stack justifyContent={'center'} sx={{ height: '100vh' }}>
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
                <SwiperSlide key={key}>
                  <WorkScreen  {...item} />
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