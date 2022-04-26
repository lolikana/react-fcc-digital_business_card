import React from 'react';
import './swiperProfile.css';
import PROFILE1 from '../../images/img-profile-1.jpeg';
import PROFILE2 from '../../images/img-profile-2.jpeg';
import PROFILE3 from '../../images/img-profile-3.jpeg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from 'swiper';

const imgProfileData = [
  {
    image: PROFILE1,
  },
  {
    image: PROFILE2,
  },
  {
    image: PROFILE3,
  },
];

const SwiperProfile = () => {
  return (
    <>
      <Swiper
        effect={'fade'}
        navigation={true}
        grabCursor={true}
        loop={true}
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        fadeEffect={{
          crossFade: true
        }}
        speed={1500}
        pagination={{ clickable: true }}
        className="mySwiper swiper-profile"
      >
        {imgProfileData.map(({ image }, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide-profile">
              <img src={image} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default SwiperProfile;
