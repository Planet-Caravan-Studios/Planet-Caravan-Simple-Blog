import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import 'normalize.css';
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
