import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

import DesktopNav from '@components/DesktopNav'
import SocialIcons from '@components/SocialIcons'

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }) {
  return (
    <div >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

    {/* HEADER */}
      {/*<header className={styles.header}>
        
        <div className={styles.logo}>
          <Image
            priority
            src="/images/planet-caravan-studios-logo.png"
            
            height={150}
            width={150}
            alt={name}
          />
        </div>
        
        <Link href="/">
          <a className="headerLink">
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </a>
        </Link>

      </header>*/}

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

    {/* FOOTER */}
      <footer className={styles.footer}>
        
        <Link href="/">
          <Image
            priority
            src="/images/planet-caravan-studios-logo.png"
            className={styles.logo}
            height={100}
            width={100}
            alt={name}
          />
        </Link>
        <SocialIcons
          instagram="#"
          facebook="#"
          twitter="#"
          tumblr="#"
          pinterest="#"
        />

      </footer>

    </div>
  )
}
