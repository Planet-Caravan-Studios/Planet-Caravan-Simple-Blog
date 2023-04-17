/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import SubComponent from './SubComponent'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function SizingExample({ 
  //Props
  children, clampVar, clampVal, 
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div 
      className={componentStyles.SizingExample}
    >
      <div 
        className={componentStyles.sizeBox}
        data-size={clampVar}
      />
      <div className={componentStyles.sizeMeta}>
        Var Name: ${clampVar}<br/>
        SCSS Value: <code>{clampVal}</code>
      </div>
    </div>
  )
}
