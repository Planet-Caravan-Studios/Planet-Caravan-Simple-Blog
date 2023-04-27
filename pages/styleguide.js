/*===== Utility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Link from 'next/link'

/*===== Theme Components =====*/
import Layout from '@components/Layout'
import Container from '@components/Container'
import FontExample from '@components/StyleguideComponents/FontExample'
import ColorExample from '@components/StyleguideComponents/ColorExample'
import PlaceholderContent from '@components/ContentComponents/PlaceholderContent'
import SizingExample from '@components/StyleguideComponents/SizingExample'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== JSON Page Content =====*/
import siteData from "@data/siteData.json"
import pageData from "@data/pageIndex.json"

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
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
        <title>Styleguide | {siteData.siteTitleBase}</title>
      </Head>

        <div className={pageStyles.styleguide}>
          <section className={pageStyles.textSection}>
            <Container>
              <h1>STYLEGUIDE</h1>
              <hr/>
            </Container>
          </section>

          <section className={pageStyles.textSection}>
            <Container>
              <h2>Logos</h2>
              <div className={pageStyles.styleContainer}>
                <PlaceholderContent/>
              </div>
            </Container>
           </section>

          <section className={pageStyles.textSection}>
            <Container>
              <h2>Colors</h2>
              <p>
                Try to use only SCSS vars in your style code.  This way, you can change all instances of that color in one spot.  You can also use "named variables" like $primaryColor and $accentColor to more easily set the overall theme of the project.
              </p>
              <br/>
              <div className={pageStyles.styleContainer}>
                
                <ColorExample
                  color="#212121"
                  colorVar="$black"
                  namedColorVar="$primaryColor, $textColor"
                />

                <ColorExample
                  color="#FAFAFA"
                  colorVar="$white"
                  namedColorVar="$secondaryColor, $backgroundColor"
                />

                <ColorExample
                  color="#CCCCCC"
                  colorVar="$lightGrey"
                />

                <ColorExample
                  color="#3F3F3F"
                  colorVar="$darkGrey"
                />

                <ColorExample
                  color="#EFD9AF"
                  colorVar="$cream"
                />

                <ColorExample
                  color="#F6AE0A"
                  colorVar="$yellow"
                  namedColorVar="$accentColor3"
                />

                <ColorExample
                  color="#F27719"
                  colorVar="$orange"
                  namedColorVar="$accentColor2"
                />

                <ColorExample
                  color="#BA4103"
                  colorVar="$red"
                  namedColorVar="$accentColor"
                />

                <ColorExample
                  color="#402418"
                  colorVar="$brown"
                  namedColorVar="$accentColor4"
                />

              </div>
            </Container>
           </section>

           <section className={pageStyles.textSection}>
             <Container>
               <h2>Fonts &amp; Font Sizes</h2>
               <p>Similar to working with colors, try to always use SCSS variables to set fonts and font sizes.  This will let you swap out fonts and adjust font sizes across your project in seconds.</p>
               <br/>
               <div className={pageStyles.styleContainer}>
                  <FontExample
                    font="fontBody"
                    fontSize="fontSizeDetail"
                    sampleText="Lorem Ipsum 123"
                  />
                  <FontExample
                    font="fontBody"
                    fontSize="fontSizeBody"
                    sampleText="Lorem Ipsum 123"
                  />
                  <FontExample
                    font="fontBody"
                    fontSize="fontSizeSubhead"
                    sampleText="Lorem Ipsum 123"
                  />
                  <FontExample
                    font="fontBody"
                    fontSize="fontSizeHeading"
                    sampleText="Lorem Ipsum 123"
                  />
               </div>
               <br/>
               <div className={pageStyles.styleContainer}>
                  <FontExample
                    font="fontBody"
                    fontSize="fontSizeDetail"
                    sampleText="Lorem Ipsum 123"
                  />
                  <FontExample
                    font="fontBody"
                    fontSize="fontSizeBody"
                    sampleText="Lorem Ipsum 123"
                  />
                  <FontExample
                    font="fontBody"
                    fontSize="fontSizeSubhead"
                    sampleText="Lorem Ipsum 123"
                  />
                  <FontExample
                    font="fontBody"
                    fontSize="fontSizeHeading"
                    sampleText="Lorem Ipsum 123"
                  />
               </div>
               
             </Container>
            </section>

            <section className={pageStyles.textSection}>
              <Container>
                <h2>Links &amp; Buttons</h2>
                <div className={pageStyles.styleContainer}>
                  <p>
                    When a text link has no set class, it will use <a href="/styleguide">$accentColor</a> as its text-color, with a <a href="/styleguide">dotted underline</a> that changes to solid on hover.
                  </p>
                  <hr/>
                  <p>
                    When a text link has no set class, it will use <a href="/styleguide">$accentColor</a> as its text-color, with a <a href="/styleguide">dotted underline</a> that changes to solid on hover.
                  </p>
                </div>
              </Container>
             </section>

             <section className={pageStyles.textSection}>
              <Container>
                <h2>Forms</h2>
                <div className={pageStyles.styleContainer}>
                  
                </div>
              </Container>
             </section>      

             <section className={pageStyles.textSection}>
               <Container>
                 <h2>PlaceholderContent</h2>
                 <p>Use this component to fill in missing content.</p>
                 <br/>
                 <div className={pageStyles.styleContainer}>
                   <PlaceholderContent/>
                 </div>
               </Container>
              </section>

              <section className={pageStyles.textSection}>
               <Container>
                 <h2>Clamp Sizing Values</h2>
                 <p>Use these values as the universal base sizes for fonts, padding, and margins.  This will keep your whole site consistent and allow you to control all spacing from a central location.</p>
                 <br/>
                 <div className={pageStyles.styleContainer}>
                   
                   <SizingExample 
                    clampVar="clampExtraSmall"
                    clampVal="clamp(8px, 1vw, 12px)"
                   />

                   <SizingExample 
                    clampVar="clampSmall"
                    clampVal="clamp(12px, 1.5vw, 16px)"
                   />

                   <SizingExample 
                    clampVar="clampMedium"
                    clampVal="clamp(14px, 2vw, 20px)"
                   />

                   <SizingExample 
                    clampVar="clampLarge"
                    clampVal="clamp(24px, 4vw, 36px)"
                   />

                   <SizingExample 
                    clampVar="clampExtraLarge"
                    clampVal="clamp(36px, 5.5vw, 52px)"
                   />

                 </div>
               </Container>
              </section>

        </div>
      
    </Layout>
  )
}


