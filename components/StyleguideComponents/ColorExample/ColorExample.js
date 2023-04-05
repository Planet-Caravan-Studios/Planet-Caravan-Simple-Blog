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
      /*style={{ color: color }}*/
    >
      <p>{color && color}</p>
      <p>{colorVar && colorVar}</p>
      <p>{namedColorVar && namedColorVar}</p>
    </div>
  )
}
