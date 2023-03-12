import React from 'react'
import Title from '../Title'
import LinkList from '../LinkList'
import styles from '../../styles/Main.module.scss'

const SnapScroll = () => {
  return (
    <>
      <div className={styles.SnapScroll}>
        <section>
          <Title />
          <LinkList />
        </section>
        <section>
          <Title />
          <LinkList />
        </section>
      </div>
    </>
  )
}

export default SnapScroll
