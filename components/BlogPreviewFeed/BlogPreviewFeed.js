import React from "react"
import { getSortedPostsData } from '@lib/posts'
import BlogPreview from '@components/BlogPreview'
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function BlogPreviewFeed({ 
  //Props
  allPostsData
}) {

  //console.log(author);

  return (
    <div className={componentStyles.BlogPreviewFeed}>
      <ul className={utilStyles.list}>
        {allPostsData.map(({ id, date, title, author, previewText, image }) => (
        
            <li className={utilStyles.listItem} key={id}>
              <BlogPreview
                id={id}
                image={image}
                title={title}
                previewText={previewText}
                author={author}
                date={date}
              />
            </li>
         
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}