import React from 'react'
import styles from '../../styles/Main.module.scss'

const Title = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.textContainer}>
          <p className={styles.titleTextLarge}>Crane Song</p>
          <p className={styles.titleTextSmall}>a singer songwriter from CA</p>
        </div>
      </div>
    </>
  )
}

export default Title
