import Head from 'next/head'
import Layout, { siteTitle } from '@components/layout'
import DesktopNav from '@components/DesktopNav'
import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '@lib/posts'
import Link from 'next/link'
import Date from '@components/date'


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
        <ul className={utilStyles.list}>
          
          {allPostsData.map(({ id, date, title, author, previewText, image }) => (
            
            <li className={utilStyles.listItem} key={id}>
              <div>
                <Link href={`/posts/${id}`}>
                  <a>
                    <img 
                      src={image} 
                      alt="" 
                    />
                  </a>
                </Link>
              </div>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <p>
                {previewText}
              </p>
              <small className={utilStyles.lightText}>
                {author}&nbsp;|&nbsp;
                <Date dateString={date} />
              </small>
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
