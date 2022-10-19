/*===== Components =====*/
import Head from 'next/head'
import Layout, { siteData } from '@components/layout'
import Container from '@components/Container'
import HeroSection from '@components/HeroSection'
import SliderComponent from '@components/Slider'

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
          <h1>Sliders</h1>
          <SliderComponent/>
        </Container>

      </section>

    </Layout>
  )
}