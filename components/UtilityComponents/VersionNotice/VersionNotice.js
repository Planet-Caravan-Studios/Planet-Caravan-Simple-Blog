/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Link from 'next/link'

/*===== Theme Components =====*/
import IconWidget from './IconWidget'
import NoticeInfo from './NoticeInfo'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function VersionNotice({ 
  //Props
  children, versionNumber, updatePercentComplete,
  totalPercentComplete, notes, currentUpdate, nextUpdate
}) {

  //JS Goes Here
  //console.log(author);
   useEffect(() => {});

  return (
    <div className={componentStyles.VersionNotice}>
      <NoticeInfo
        versionNumber={versionNumber}
        updatePercentComplete={updatePercentComplete}
        totalPercentComplete={totalPercentComplete}
        notes={children}
      />
      <IconWidget/>
    </div>
  )
}
