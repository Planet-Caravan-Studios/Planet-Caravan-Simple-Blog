/*===== Components =====*/
import Head from 'next/head'
import Layout from '@components/layout'
import Container from '@components/Container'
import HeroSection from '@components/HeroSection'
import SliderComponent from '@components/Slider'
import SliderFX from '@components/SliderFX'

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"

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
          <br/><hr/><br/>
          <h2>Basic Slider</h2>
          <SliderComponent/>
        </Container>
      </section>

     {/* <section className={utilStyles.textSection}> 
        <Container> 
          <h2>FX Slider</h2>
          <SliderFX/>
        </Container>
      </section>*/}

    </Layout>
  )
}