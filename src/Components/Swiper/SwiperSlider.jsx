import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const SwiperSlider = () => {
  return (
    <Swiper
        spaceBetween={20}
        slidesPerView={3}
        className="swiper mySwiper">
          <div className="swiper-wrapper">
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head flex">
                  <img src="images/client-1.jpg" alt="client" />
                  <div className="info">
                    <h5>Мария Антонова</h5>
                    <h6>24.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного
                    текста рыбы на русском языке, а начинающему оратору. Сайт
                    рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head">
                  <img src="images/client-2.jpg" alt="client" />
                  <div className="info">
                    <h5>Фазилов Азизбек</h5>
                    <h6>12.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору.
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев, более менее осмысленного текста рыбы на русском языке, а начинающему оратору.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head">
                  <img src="images/client-3.jpg" alt="client" />
                  <div className="info">
                    <h5>Эвелина Усманова</h5>
                    <h6>08.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору.
                    Сайт рыбатекст поможет дизайнеру, верстальщику.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head">
                  <img src="images/client-2.jpg" alt="client" />
                  <div className="info">
                    <h5>Мария Антонова</h5>
                    <h6>24.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору.
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев, более менее осмысленного текста рыбы на русском языке, а начинающему оратору.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head">
                  <img src="images/client-1.jpg" alt="client" />
                  <div className="info">
                    <h5>Мария Антонова</h5>
                    <h6>24.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного
                    текста рыбы на русском языке, а начинающему оратору. Сайт
                    рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head">
                  <img src="images/client-1.jpg" alt="client" />
                  <div className="info">
                    <h5>Мария Антонова</h5>
                    <h6>24.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного
                    текста рыбы на русском языке, а начинающему оратору. Сайт
                    рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head">
                  <img src="images/client-1.jpg" alt="client " />
                  <div className="info">
                    <h5>Мария Антонова</h5>
                    <h6>24.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного
                    текста рыбы на русском языке, а начинающему оратору. Сайт
                    рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head">
                  <img src="images/client-1.jpg" alt="client " />
                  <div className="info">
                    <h5>Мария Антонова</h5>
                    <h6>24.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного
                    текста рыбы на русском языке, а начинающему оратору. Сайт
                    рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <div className="card">
                <div className="card-head">
                  <img src="images/client-1.jpg" alt="client" />
                  <div className="info">
                    <h5>Мария Антонова</h5>
                    <h6>24.09.20</h6>
                  </div>
                </div>
                <div className="card-body">
                  <p>
                    Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько абзацев более менее осмысленного
                    текста рыбы на русском языке, а начинающему оратору. Сайт
                    рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                    сгенерировать несколько.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination" />
        </Swiper>
  )
}

export default SwiperSlider