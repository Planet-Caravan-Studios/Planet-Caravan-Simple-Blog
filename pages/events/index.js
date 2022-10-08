import Head from 'next/head'
import Layout, { siteTitle } from '@components/layout'
import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '@lib/events'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'

export default function Events({ allPostsData }) {
  return (
    <Layout home>
      
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <Container>
          <p>
            Events Directory Page
          </p>
        </Container>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Container>

          <h2 className={utilStyles.headingLg}>Events</h2>
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
                  path="events"
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
