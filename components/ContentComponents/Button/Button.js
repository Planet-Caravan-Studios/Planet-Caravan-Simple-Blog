/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
//import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function Button({ 
  href, text, newTab, 
  dataAttr, buttonStyle
}) {
  return (
    <Link 
      href={href ? href : '#'}
      
      {...dataAttr && dataAttr}
    >
      <a 
        className={componentStyles.Button}
        target={newTab ? '_blank' : '_self'}
        data-button-style={buttonStyle ? buttonStyle : ''}
      >{text}</a>
    </Link>      
  )
}
