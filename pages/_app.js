import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import 'normalize.css';
//Swiper.JS
import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/thumbs/thumbs.scss';

//Custom CSS/JS
import '@styles/main.scss'
import '@scripts/script.js';

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    console.log("SmoothLoad function started");
    
    setTimeout(function() { 
        $("#LayoutOuter").attr("data-hidden", "false");
    }, 1000);
    console.log("SmoothLoad function finished");
  });

  return <Component {...pageProps} />
}
