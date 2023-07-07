import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialItem.css";

const TestimonialItem = ({ testimonies }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {testimonies.map(({ imgSource, name, review }) => (
        <SwiperSlide className='testimonial' key={Math.random()}>
          <div className='client-avatar'>
            <img src={imgSource} alt='client' />
          </div>
          <h5 className='client-name'>{name}</h5>
          <small className='client-review'>{review}</small>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialItem;
