import React from 'react'
import Title from '../Title'
import LinkList from '../LinkList'
import styles from '../../styles/Main.module.scss'

const SnapScroll = () => {
  return (
    <>
      <div className={styles.scroller}>
        <section>
          <Title />
        </section>
        <section>
          <LinkList />
        </section>
      </div>
    </>
  )
}

export default SnapScroll
