import Image from 'next/image'
import componentStyles from './styles.module.scss'
import Link from 'next/link'
import utilStyles from '@styles/utils.module.css'
import varStyles from '@styles/vars.module.scss'
import { BsXLg } from "react-icons/bs";

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function NavMenu({ children, home }) {
  return (
    <div className={componentStyles.NavMenuWrapper}>
      <div className={componentStyles.NavMenuBackdrop}></div>
      <nav className={componentStyles.NavMenu}>
        <div>
          <BsXLg size="50"/>
        </div>
      </nav>      
    </div>
  )
}
