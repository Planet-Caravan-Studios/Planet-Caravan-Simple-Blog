/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function MasterComponent({ 
  //Props
  children, id, image, title, 
  previewText, author, date
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div className={componentStyles.MasterComponent}>

      {/* Conditional Rending - IF */}
      {title &&
        <p className={componentStyles.title}>
          {title}
        </p>
      }

      {/* Conditional Rending - IF/ELSE */}
      {author ?
        <p className={componentStyles.author}>
          {author}
        </p>
        :
        <p className={componentStyles.author}>
          No Author Listed
        </p>
      }

      {/* Link Example */}
      <Link href={`/posts/${id}`} passHref>
        <a className={componentStyles.title}>{title}</a>
      </Link>
      
      {/* Image - Conditional Render */}
      {image ? 
         <div className={componentStyles.image}>
          <Link className={componentStyles.imgLink} href={`/posts/${id}`} passHref>
            <a>
              <img src={image} alt="" />
            </a>
          </Link>
        </div>
        :
        <div className={componentStyles.image}>
          NO IMAGE
        </div>
      }
       
      {/* data-attr styling */}
      <div 
        className={componentStyles.dataAttrTest}
        data-bg-color={backgroundColor}
        data-font={font}
      >
        <p>data-attr test</p>
      </div>
        
    </div>
  )
}
