import React from "react"
import componentStyles from './styles.module.scss'


export default function Button1({ 
  href, text, target
}) {
  return (
    <a 
      href={href}
      target={target ? target : '_self'}
      className={componentStyles.Button1}
    >
      {text}
    </a>      
  )
}
