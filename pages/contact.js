/*===== Components =====*/
import Head from 'next/head'
import Layout, { siteData } from '@components/layout'
import Container from '@components/Container'
import HeroSection from '@components/HeroSection'
import ContactForm from '@components/ContactForm'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'

/*===== JSON Page Content =====*/
import pageData from "@data/pageAbout.json"

/*===== Page Content =====*/
export default function About({}) {
  return (
    <Layout>
      
      <Head>
        <title>About | {siteData.siteTitleBase}</title>
      </Head>
      
      <HeroSection
        heading={pageData.h1Title}
        subhead={pageData.bodyContent1}
        image={pageData.heroImage}
        backgroundFilter
      />

      <section className={utilStyles.textSection}> 
        <Container> 
          <ContactForm/>
        </Container>
      </section>

    </Layout>
  )
}