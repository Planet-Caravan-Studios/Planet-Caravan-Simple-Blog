import React from "react"
import componentStyles from './styles.module.scss'

export default function Container({ 
  children
}) {
  return (
    <div className={componentStyles.Container}>
      {children}
    </div>
  )
}
