import Head from 'next/head'
import Date from '@components/date'
import Layout, { siteTitle } from '@components/layout'
import DesktopNav from '@components/DesktopNav'
import BlogPreview from '@components/BlogPreview'
/*import BlogPreviewFeed from '@components/BlogPreviewFeed'*/

import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '@lib/posts'
import Link from 'next/link'



export default function Home({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>Home | {siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Planet Caravan Studios Simple Blog - this is a template meant to be very basic.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
