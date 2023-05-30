/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function BasicLink({ 
  //Props
  children, url, target, 
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div className={componentStyles.BasicLink}>

      <Link href={`/`} passHref>
        <a 
          className={componentStyles.title}
          target={target}
        >
          Home
        </a>
      </Link>
        
    </div>
  )
}
