import Head from 'next/head'
import Layout, { siteData } from '@components/layout'
import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '@lib/posts'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'

export default function Posts({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>Posts | {siteData.siteTitleBase}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <Container>
          <p>
            Posts Directory Page
          </p>
        </Container>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Container>
          
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

        </Container>
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
