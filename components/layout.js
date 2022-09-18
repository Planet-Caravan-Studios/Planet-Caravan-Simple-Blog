import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import DesktopNav from '@components/DesktopNav'
import Footer from '@components/Footer'

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Simple blog-style template for Planet Caravan Studios"
        />
        <meta property="og:image"
          content={`/images/planet-caravan-studios-logo.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <DesktopNav/>
      
      {/* BREADCRUMBS */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      {/* MAIN SECTION */}
      <main>
        <div className={styles.container}>
          {children}
        </div>
      </main>

      <Footer/>
      

    </div>
  )
}
