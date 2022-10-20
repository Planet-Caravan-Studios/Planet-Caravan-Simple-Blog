/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Button1 from '@components/Button1'
import Slide from './Slide'
import $ from 'jquery'

/*===== Swiper Imports =====*/
import SwiperCore, { Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
SwiperCore.use([Controller, Navigation, Pagination, A11y, Autoplay, EffectCoverflow]);

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function SliderFX({ 
  //Props
  id, image, title, 
  previewText, author, date, effect, middle
}) {

  /*[middle] = useState(0);
  
  useEffect(() => {
    $(document).ready(function() {
      
      let count = $("#SliderFX .swiper-slide").length;
      let middle = Math.ceil(count/2);
      console.log([middle]);

    });
  }, [middle]);*/

  return (
    <Swiper
        id="SliderFX"
        className={componentStyles.Slider}
        //Settings
        centeredSlides={true}
        spaceBetween={-250}
        slidesPerView={1}
        //loop={true}
        speed={1000}
        preventClicks={false}
        //virtual={{enabled: true}}
        initialSlide={2}
        
        //Navigation
        navigation
        pagination={{ clickable: true }}

        //{effect &&
          //Effects
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 0.75,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Pagination]}
        //}

        //Actions
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/planet-caravan-studios-logo.png"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/planet-caravan-studios-logo.png"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/planet-caravan-studios-logo.png"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/planet-caravan-studios-logo.png"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

        <SwiperSlide className={componentStyles.SlideOutter}>
          <div className={componentStyles.SlideInner}>
            
            <Slide
              image="/images/planet-caravan-studios-logo.png"
              imageAlt="Planet Caravan"
              titleCopy="BasicSlide Component"
              bodyCopy="This slide is its own component, with 
                image, imageAlt, titleCopy, and bodyCopy props."
            />

          </div>
        </SwiperSlide>

      </Swiper>

      
  )
}
