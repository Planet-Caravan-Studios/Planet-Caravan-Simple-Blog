import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import BlogPreview from '@components/BlogPreview'


export default function Posts({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Posts Directory Page
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
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
