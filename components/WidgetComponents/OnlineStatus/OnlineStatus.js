/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function OnlineStatus({ 
  //Props
  children, id, image, imgAlt, title, 
  backgroundColor, font,
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {
    const statusElement = document.getElementById('OnlineStatusWidgetText');

    // Function to update the status
    function updateStatus() {
      if (navigator.onLine) {
        statusElement.textContent = 'ONLINE';
      } else {
        statusElement.textContent = 'OFFLINE';
      }
    }

    // Update the status initially
    updateStatus();

    // Listen for online and offline events
    window.addEventListener('online', updateStatus);
    window.addEventListener('offline', updateStatus);
   });

  return (
    <div id="OnlineStatusWidget" className={componentStyles.OnlineStatus}>
      <p>Online Staus: <span id="OnlineStatusWidgetText"></span></p>
    </div>
  )
}
