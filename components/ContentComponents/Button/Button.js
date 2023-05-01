/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
//import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function Button({ 
  href, text, target, dataAttr
}) {
  return (
    <Link 
      href={href ? href : '#'}
      target={target ? target : '_self'}
      className={componentStyles.Button}
      {...dataAttr && dataAttr}
    >
      <a>{text}</a>
    </Link>      
  )
}
