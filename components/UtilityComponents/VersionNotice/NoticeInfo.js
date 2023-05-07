/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import { BsCodeSlash } from "react-icons/bs";

/*===== Theme Components =====*/


/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function NoticeInfo({ 
  //Props
  children, versionNumber, updatePercentComplete,
  totalPercentComplete, notes, currentUpdate, nextUpdate
}) {

  //JS Goes Here
  //console.log(title);
   useEffect(() => {});

  return (
    <div 
      className={componentStyles.NoticeInfo}
    >
      
      <div className={componentStyles.version}>
        <div>v.{versionNumber}</div>
        <div>Sprint Completion: {updatePercentComplete}%</div>
        <div>Total Completion: {totalPercentComplete}%</div>
      </div>
      
      <hr/>
      
      <div className={componentStyles.notes}>
        <div>Notes:</div>
        <div>
          {notes}
        </div>
      </div>

    </div>
  )
}
