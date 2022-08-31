import Image from 'next/image'
import componentStyles from './styles.module.scss'
import Link from 'next/link'
import utilStyles from '@styles/utils.module.css'
import * as Icon from 'react-bootstrap-icons';

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function DesktopNav({ children, home }) {
  return (
    <>

    {/* HEADER */}
      <header className={componentStyles.header}>
        
        <div className={componentStyles.logo}>
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

        <Icon.List color="#212121" size={36} />

      </header>
      
      
    </>
  )
}
