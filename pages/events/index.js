/*===== Utility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

/*===== Theme Components =====*/
import Layout from '@components/layout'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
import pageData from "@data/pageIndex.json"

/*===== Events Data =====*/
import { getSortedPostsData } from '@lib/events'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Events({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>Events | {siteData.siteTitleBase}</title>
      </Head>

      <section className={pageStyles.headingMd}>
        <Container>
          <p>
            Events Directory Page
          </p>
        </Container>
      </section>

      <section className={`${pageStyles.headingMd} ${pageStyles.padding1px}`}>
        <Container>
          
          <h2 className={pageStyles.headingLg}>Blog</h2>
          <ul className={pageStyles.list}>
            
            {allPostsData.map(({ id, date, title, author, previewText, image }) => (
              <li className={pageStyles.listItem} key={id}>
                <BlogPreview
                  id={id}
                  image={image}
                  title={title}
                  previewText={previewText}
                  author={author}
                  date={date}
                />
              </li>
            ))}
          </ul>

        </Container>
      </section>
    </Layout>
  )
}