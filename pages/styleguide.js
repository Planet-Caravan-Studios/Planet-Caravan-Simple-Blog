/*===== Utility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

/*===== Theme Components =====*/
import Layout from '@components/Layout'
import Container from '@components/Container'
import FontExample from '@components/StyleguideComponents/FontExample'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
import pageData from "@data/pageIndex.json"

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*===== Page Content =====*/
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>Styleguide | {siteData.siteTitleBase}</title>
      </Head>

        <div className={pageStyles.styleguide}>
          <section className={pageStyles.textSection}>
            <Container>
              <h1>STYLEGUIDE</h1>
              <hr/>
            </Container>
          </section>

          <section className={pageStyles.textSection}>
            <Container>
              <h2>Logos</h2>
              <div className={pageStyles.styleContainer}>
                
              </div>
            </Container>
           </section>

          <section className={pageStyles.textSection}>
            <Container>
              <h2>Colors</h2>
              <div className={pageStyles.styleContainer}>
                
              </div>
            </Container>
           </section>

           <section className={pageStyles.textSection}>
             <Container>
               <h2>Fonts &amp; Font Sizes</h2>
               <div className={pageStyles.styleContainer}>
                <FontExample
                  font="body"
                  fontSize="detail"
                  sampleText="Lorem Ipsum 123"
                />
                <FontExample
                  font="body"
                  fontSize="body"
                  sampleText="Lorem Ipsum 123"
                />
                <FontExample
                  font="body"
                  fontSize="subhead"
                  sampleText="Lorem Ipsum 123"
                />
                <FontExample
                  font="body"
                  fontSize="heading"
                  sampleText="Lorem Ipsum 123"
                />
               </div>
             </Container>
            </section>

            <section className={pageStyles.textSection}>
              <Container>
                <h2>Links &amp; Buttons</h2>
                <div className={pageStyles.styleContainer}>
                  
                </div>
              </Container>
             </section>

             <section className={pageStyles.textSection}>
              <Container>
                <h2>Forms</h2>
                <div className={pageStyles.styleContainer}>
                  
                </div>
              </Container>
             </section>          
        </div>
      
    </Layout>
  )
}


