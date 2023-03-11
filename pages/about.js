/*===== Utility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

/*===== Theme Components =====*/
import Layout from '@components/layout'
import Container from '@components/Container'
import HeroSection from '@components/HeroSection'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
import pageData from "@data/pageAbout.json"

/*===== Page Content =====*/
export default function About({}) {
  return (
    <Layout>
      
      <Head>
        <title>About | {siteData.siteTitleBase}</title>
      </Head>
      
      <HeroSection
        heading={pageData.h1Title}
        subhead={pageData.bodyContent1}
        image={pageData.heroImage}
        backgroundFilter
      />

      <section className={utilStyles.textSection}> 
        <Container> 
          <h2>Page Data</h2>
          <p>
            {pageData.bodyContent2}
          </p>
        </Container>
      </section>

    </Layout>
  )
}