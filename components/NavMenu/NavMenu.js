import Image from 'next/image'
import componentStyles from './styles.module.scss'
import Link from 'next/link'
import utilStyles from '@styles/utils.module.css'
import varStyles from '@styles/vars.module.scss'
import { BsXLg } from "react-icons/bs";
import Container from '@components/Container'

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function NavMenu({ children, home }) {
  return (
    <div id="NavMenu" className={componentStyles.NavMenuWrapper}>
      <div className={componentStyles.NavMenuBackdrop +" navClose"}></div>
      <Container width="contentWidthXl">
        <div className={componentStyles.NavMenuClose +" navClose"}>
          <BsXLg className={componentStyles.icon} color="#212121" size={45} />
          <BsXLg className={componentStyles.iconHover} color="#fafafa" size={45} />
        </div>
      </Container>
      <nav className={componentStyles.NavMenu}>
        
          
        <div className={componentStyles.inner}>
          <Container>
            <div className={componentStyles.links}>
              <ul className={utilStyles.list}>
                <li className={utilStyles.listItem}>
                  <a href="/">Home</a>
                </li>
                <li className={utilStyles.listItem}>
                  <a href="#">About</a>
                </li>
                <li className={utilStyles.listItem}>
                  <a href="#">Contact</a>
                </li>
                <li className={utilStyles.listItem}>
                  <a href="#">Home</a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        
      </nav>

    </div>
  )
}
