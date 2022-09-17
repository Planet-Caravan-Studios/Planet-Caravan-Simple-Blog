import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function BlogPreview({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  console.log(author);

  return (
    <div className={componentStyles.BlogPreview}>
      
        <div className={componentStyles.image}>
          <Link href={`/posts/${id}`}>
            <a>
              <img 
                src={image} 
                alt="" 
              />
            </a>
          </Link>
        </div>
        <Link href={`/posts/${id}`}>
          <a className={componentStyles.title}>{title}</a>
        </Link>
        {previewText && 
          <p className={componentStyles.previewText}>
            {previewText}
          </p>
        }
        <div>
          {author &&
            <span className={componentStyles.author}>{author} | </span>
          }
          {date &&
            <span className={componentStyles.date}>
              <Date dateString={date}  />
            </span>
          }          
          <SocialIcons
            instagram="#"
            facebook="#"
            twitter="#"
            tumblr="#"
            pinterest="#"
          />
        </div>
      
    </div>
  )
}
