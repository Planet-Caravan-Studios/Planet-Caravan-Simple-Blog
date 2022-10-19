/*===== Components =====*/
import Head from 'next/head'
import Layout, { siteData } from '@components/layout'
import Container from '@components/Container'
import HeroSection from '@components/HeroSection'
import SliderFX from '@components/SliderFX'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'

/*===== JSON Page Content =====*/
import pageData from "@data/pageAbout.json"

/*===== Page Content =====*/
export default function Slider({}) {
  return (
    <Layout>
      
      <Head>
        <title>Slider | {siteData.siteTitleBase}</title>
      </Head>

      <section className={utilStyles.textSection}> 
        <Container> 
          <h1>Popup Slider</h1>
        </Container>
      </section>

      <section className={utilStyles.textSection}> 
        <Container> 
          <SliderFX/>
        </Container>
      </section>

    </Layout>
  )
}