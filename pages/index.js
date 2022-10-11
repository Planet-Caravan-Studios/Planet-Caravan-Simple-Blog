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
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>
      <Container>
        
        <section className={utilStyles.textSection}>
          <h1>SIMPLE BLOG TEMPLATE</h1>
          <p>
            Planet Caravan Studios Simple Blog - this is a template meant to be very basic and barebones, allowing you to apply your own styles and content.
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
          <p>This method can be reused for individual page content as well.  Just make a new JSON file in the /data/ folder and import it like in the Layout component.</p>
        </section>

        <section className="">
          <h3 className={utilStyles.headingLg}>Blog Feed</h3>
          <p>The blog functionality, along with it's clone in the events functions, can be renamed to anything that requires dynamic content - such as products.  You can also make as many clones of these functions as you'd like for whatever purposes you need.</p>
          <br/>
          <hr/>
          <br/>
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
