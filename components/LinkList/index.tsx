import React from 'react'
import styles from '../../styles/Main.module.scss'
import { mediaLinks } from '../../assets/MediaLinks'

const LinkList = () => {
  return (
    <>
      <div>
        {mediaLinks.map((mediaLinks: any) => {
          if (mediaLinks.platform === 'spotify') {
            return <div dangerouslySetInnerHTML={{ __html: mediaLinks.url }}></div>
          }
        })}
      </div>
      <div className={styles.linkListContainer}>
        <a
          className={styles.linkList}
          href='https://cranesong.bandcamp.com/music'
        >
          bandcamp
        </a>
        <a className={styles.linkList} href='https://soundcloud.com'>
          soundcloud
        </a>
      </div>
    </>
  )
}

export default LinkList
