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
              <a>
                <img src="/images/planet-caravan-studios-logo.png" alt=""/>
              </a>
            </Link>
            <Link href="/">
              <a className={componentStyles.siteName}>
                <span >
                  {name}
                </span>
              </a>
            </Link>
          </div>
          
          <div className={componentStyles.buttonWrapper}>
            <div id="headerNavButton" className={componentStyles.navButton}>
              <BsList className={componentStyles.icon} color="#212121" size={45} />
              <BsList className={componentStyles.iconHover} color="#fafafa" size={45} />
            </div>
          </div>
          
          
        </div>
        
      </header>
      
      
    </>
  )
}
