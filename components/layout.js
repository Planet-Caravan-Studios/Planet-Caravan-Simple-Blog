import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from "@data/data.json"
import $ from 'jquery'

import DesktopNav from '@components/DesktopNav'
import NavMenu from '@components/NavMenu'
import Footer from '@components/Footer'
import Container from '@components/Container'

export const siteTitle = 'Next.js Sample Website'
export const siteData = data

export default function Layout({ children, home }) {

  return (
    <div id="LayoutOuter" className={styles.outer} >
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Simple blog-style template for Planet Caravan Studios"
        />
        <meta property="og:image"
          content={`/images/planet-caravan-studios-logo.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>

      <DesktopNav/>
      <NavMenu/>
      

      {/* MAIN SECTION */}
      <main className={styles.main}>
        
          {/* BREADCRUMBS */}
          {/*{!home && (
            <Container>
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            </Container>
          )}*/}
          
          <div>
            {children}
          </div>
          
        
      </main>

      <Footer/>
      

    </div>
  )
}
