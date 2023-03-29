/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function ColorExample({ 
  //Props
  children, color, colorVar, namedColorVar
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div 
      className={componentStyles.ColorExample}
      style={{ color: color }}
    >
      {color && color}
      {colorVar && colorVar}
      {namedColorVar && namedColorVar}
    </div>
  )
}
