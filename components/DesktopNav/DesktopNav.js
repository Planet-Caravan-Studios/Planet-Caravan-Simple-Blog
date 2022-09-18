import Image from 'next/image'
import componentStyles from './styles.module.scss'
import Link from 'next/link'
import utilStyles from '@styles/utils.module.css'
import varStyles from '@styles/vars.module.scss'
import { BsList } from "react-icons/bs";

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function DesktopNav({ children, home }) {
  return (
    <>

      {/* HEADER */}
      <header className={componentStyles.header}>
        <div className={componentStyles.inner}>
          
          <div className={componentStyles.logo}>
            <Link href="/">
              <a className="headerLink">
                <img src="/images/planet-caravan-studios-logo.png" alt=""/>
              </a>
            </Link>
            <Link href="/">
              <a className="headerLink">
                <h1 className={componentStyles.navButton}>{name}</h1>
              </a>
            </Link>
          </div>
          
          <div id="headerNavButton" className={componentStyles.navButton}>
            <BsList color="#212121" size={50} />
          </div>
          
        </div>
        
      </header>
      
      
    </>
  )
}
