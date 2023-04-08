import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/autoplay";
import "swiper/css/pagination";

// import required modules
import { EffectCards, Pagination, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        cardsEffect={{
          perSlideOffset: 12,
          rotate: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/img/graphs/batman.svg" />
          <div>Batman</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/graphs/lizard.svg" />
          <div>Lizard</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/graphs/broken-wing-put-butterfly.svg" />
          <div>Broken Butterfly</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/graphs/long-put-ladder.svg" />
          <div>Put Ladder</div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/graphs/call-calendar-spread.svg" />
          <div>Calendar Spread</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
