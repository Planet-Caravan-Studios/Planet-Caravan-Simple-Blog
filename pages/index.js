import Head from 'next/head'
import Date from '@components/date'
import Layout, { siteTitle, siteData } from '@components/layout'
import DesktopNav from '@components/DesktopNav'
import BlogPreview from '@components/BlogPreview'
/*import BlogPreviewFeed from '@components/BlogPreviewFeed'*/
import Container from '@components/Container'

import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '@lib/posts'
//import Data from "./api/data.json"
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>
      <Container>
        
        <section className={utilStyles.textSection}>
          <h1>SIMPLE BLOG TEMPLATE</h1>
          <p>
            Planet Caravan Studios Simple Blog - this is a template meant to be very basic. 
          </p>
        </section>

        <section className={utilStyles.textSection}>
          <h2>Global Site Data</h2>
          <p>
          'siteData' var is exported from the Layout component and is available across all pages.  This is a simple JSON data file intended for arbitrary use.          
          </p>
          <ul>
            <li>
              Title: {siteData.title}
            </li>
            <li>
              Description: {siteData.description}
            </li>
            <li>
              Author: {siteData.author}
            </li>
            <li>
              Organization: {siteData.organization}
            </li>
            <li>
              Github: {siteData.github}
            </li>
          </ul>
        </section>

        <section className="">
          <h3 className={utilStyles.headingLg}>Blog Feed</h3>
          <hr/>
          {/*<BlogPreviewFeed/>*/}
          <ul className={utilStyles.list}>
            
            {allPostsData.map(({ id, date, title, author, previewText, image }) => (
              
              <li className={utilStyles.listItem} key={id}>
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
        </section>

      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
