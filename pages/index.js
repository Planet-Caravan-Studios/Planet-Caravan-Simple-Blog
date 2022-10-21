/*===== Components =====*/
import Head from 'next/head'
import Link from 'next/link'
import Date from '@components/date'
import Layout, { siteData } from '@components/layout'
import DesktopNav from '@components/DesktopNav'
import BlogPreview from '@components/BlogPreview'
import Container from '@components/Container'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import { getSortedPostsData } from '@lib/posts'

/*===== Posts Data =====*/
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
              Title: <code>{siteData.title}</code>
            </li>
            <li>
              Description: <code>{siteData.description}</code>
            </li>
            <li>
              Author: <code>{siteData.author}</code>
            </li>
            <li>
              Organization: <code>{siteData.organization}</code>
            </li>
            <li>
              Github: <code>{siteData.github}</code>
            </li>
          </ul>
          <p>This method can be reused for individual page content as well.  Just make a new JSON file in the <code>/data/</code> folder and import it like in the Layout component.</p>
        </section>

        <section className="">
          <h3 className={utilStyles.headingLg}>Blog Feed</h3>
          <p>The blog for this project is powered by simple Markdown files using frontmatter for variables.  Simply create/modify/delete files in the <code>/posts/</code> folder.  A clone of the blog posts has been made in the <code>/events/</code> folder, to show you that the blog functionality can be cloned and rebranded as another function.</p>
          <br/>
          <p>The blog functionality, along with it's clone in the events functions, can be renamed to anything that requires dynamic content - such as products.  You can also make as many clones of these functions as you'd like for whatever purposes you need.</p>

          <br/>
          <hr/>
          <br/>

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


